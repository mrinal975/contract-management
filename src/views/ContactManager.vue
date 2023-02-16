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
            <p class="fst-italic">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-8">
                                <input type="text" class="form-control" placeholder="Search Name">
                            </div>
                            <div class="col-md-4">
                                <input type="submit" class="btn btn-outline-dark">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"Contact Manager"
}
</script>