<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">
                    Edit Contact
                </p>
                <p class="fst-italic">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </div>
        </div>
    </div>

    <!-- Spinner -->
    <div v-if="loading">
        <div class="container">
        <div class="row">
            <div class="col">
            <Spinner />
            </div>
        </div>
        </div>
    </div>

    <div class="container mt-3">
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateSubmit()">
                    <div class="mb-2">
                        <input
                        v-model="contact.name"
                        type="text" 
                        class="form-control" 
                        placeholder="Name"
                        />
                    </div>
                    <div class="mb-2">
                        <input
                            v-model="contact.email"
                            type="text"
                            class="form-control"
                            placeholder="Email"
                            />
                    </div>
                    <div class="mb-2">
                        <input 
                        type="text" 
                        v-model="contact.img"
                        class="form-control" 
                        placeholder="Photo Url" />
                    </div>
                    <div class="mb-2">
                        <input 
                        v-model="contact.mobile"
                        type="number" 
                        class="form-control" 
                        placeholder="Mobile" />
                    </div>
                    <div class="mb-2">
                        <input 
                        v-model="contact.company"
                        type="text" 
                        class="form-control" 
                        placeholder="Company" />
                    </div>
                    <div class="mb-2">
                        <input 
                        v-model="contact.title"
                        type="text" 
                        class="form-control" 
                        placeholder="Title" />
                    </div>
                    <div class="form-group">
                        <select 
                        class="form-control" 
                        v-model="contact.groupId"
                        v-if="groups.length>0"
                        >
                            <option 
                            v-for="group in groups"
                            :key="group.id"
                            value="group.name">
                            {{ group.name }}
                            </option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="update" />
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img :src="contact.img"
                class="contact-img">
            </div>
        </div>
    </div>
</template>

<script>

import Spinner from "@/components/Spinner.vue";
import { ContactService } from '@/service/ContactService';

export default {
    name : "EditContact",
    components : { Spinner },
    data: function(){
        return {
            contactId : this.$route.params.contactId,
            loading : false,
            contact : {},
            groups : [],
            errorMessage : null
        }
    },

    created: async function(){
        try{
            this.loading = true;
            let response = await ContactService.getContact(this.contactId);
            this.contact = response.data;
            let responseAllGroup = await ContactService.getAllGroups(this.contact);
            this.groups = responseAllGroup.data;
            this.loading = false

        }catch(error){
            console.log('error', error);
        }
    },

    methods: {
        updateSubmit : async function(){
            try{
                let response = await ContactService.updateContact(this.contact, this.contactId);
                if(response){
                    return this.$router.push('/contacts')
                }
                return this.$router.push(`/contacts/edit/${this.contactId}`)
            }
            catch(error){
                console.log('error---', error);
            }
        }
    }

}
</script>