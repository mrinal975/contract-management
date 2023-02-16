<template>
    <div class="container mt-3">
        <div class="row">
            <p class="h3 text-success fw-bold">
                Contact Manager
            
                <router-link to="/contacts/add" class="btn btn-success btn-sm">
                    <i class="fa fa-plus-circle"></i>
                    New
                </router-link>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Contact Manager"
}
</script>