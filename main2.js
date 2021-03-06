const constraints = {
    username: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    lastname: {
        presence: true
    },
    fullname: {
        presence: true,

    },
    title: {
        presence: true
    },
    language: {
        presence: true
    }
}

const app = {
    data() {
        return {
            image: './images/2.jpg',
            username: null,
            email: null,
            lastname: null,
            fullname: null,
            title: null,
            language: null,
            showfullname: null,
            showtitle: null,
            showemail: null,
            language_lists: [{
                    language_id: 1,
                    language: 'Thai'
                },
                {
                    language_id: 2,
                    language: 'English'
                }
            ],
            errors: null,
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                    username: this.username,
                    email: this.email,
                    lastname: this.lastname,
                    fullname: this.fullname,
                    title: this.title,
                    language: this.language
                },
                constraints)
                if(this.errors){
                    e.preventDefault();
                }
                if(!this.errors){
                    this.updateinfomation()
                }
                else{
                    alert("Your profile is updated successfully.");
                }
            },
            updateinfomation(){
                this.showfullname = this.fullname;
                this.showtitle = this.title;
                this.showemail = this.email;
        }
    }


}
mountedApp = Vue.createApp(app).mount('#app')