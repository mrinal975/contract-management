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
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-6">
                <form>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Photo Url">
                    </div>
                    <div class="mb-2">
                        <input type="number" class="form-control" placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Company">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Title">
                    </div>
                    <div class="mb-2">
                        <selector class="form-control">
                            <option>Select Group</option>
                        </selector>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="update">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4gZrd_VO1NSruRjZiHRpTqeBGStyLtYKpHyKnfGJfg&s"
                class="contact-img">
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:"EditContact"
}
</script>