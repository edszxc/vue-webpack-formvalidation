<template>
    <div class="registration">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <h1>{{title}}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-6">
                    <input type="text" v-model="fullname" placeholder="Fullname" class="input-field form-control"></br>
                    <input type="text" v-model="nickname" placeholder="Nickname" class="input-field form-control"><br/>
                    <input type="text" v-model="address" placeholder="Address" class="input-field form-control"><br/>
                </div>
                <div class="col-xs-12 col-sm-6">
                    <div class="row">
                        <div class="col-xs-8">
                            <input type="text" v-model="contactInfo" @keyup.enter="addContact" @keyup.esc="clear" placeholder="Contact Information" class="input-field form-control">
                        </div>
                        <div class="col-xs-4">
                            <button :disabled="!fulfill" @click="addContact" class="btn btn-block btn-primary">Add Contact</button>
                        </div>
                    </div>
                    <ul class="contact-list">
                        <li v-for="contact in contactList"><contact-component :contact="contact"></contact-component><button @click="remove(contact)" class="btn btn-danger"><i class="fa fa-times"></i> x</i></button></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <button :disabled="!isComplete" @click="register" class="btn btn-lg btn-block btn-primary">Register Person</button>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h2>Registered Person(s)</h2>
                        </div>
                        <div v-for="person in persons" class="panel-footer">
                            <input type="checkbox" v-model="person.contacted">
                            <span :class="{ contacted: person.contacted }">{{ person.fullname }} :
                            {{ person.nickname }} :
                            {{ person.address }} :
                            {{ person.contactList }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vue from 'vue'
    
    var contactComponent = vue.extend({
        template: '<span v-if="!editMode" @dblclick="openEdit">{{ contact.info }}</span><span v-else><input type="text" v-model="contact.info" @keyup.enter="saveUpdate" class="form-control"></span>',
        data() {
            return {
                editMode: false
            }
        },
        props: ['contact'],
        methods: {
            openEdit() {
                this.editMode = true
            },
            saveUpdate() {
                this.editMode = false
            }
        }
    })
    vue.component('contact-component', contactComponent)
    export default {
        name: 'registration',
        data() {
            return { 
                title: 'Webpack-Vue Validation Form',
                fullname: '',
                nickname: '',
                address: '',
                contactInfo: '',
                contactList: [{
                    info: '0909090909'
                }],
                persons: [{
                    fullname: 'Ed Lui Diongco',
                    nickname: 'Ed',
                    address: 'sample',
                    contactList: ['0909090909'],
                    contacted: false
                }]
            }
        },
        methods: {
            addContact() {
                if(this.contactInfo.trim()){
                    this.contactList.push({info: this.contactInfo})
                    this.contactInfo = ''
                }
            },
            remove(contact) {
                this.contactList.splice(this.contactList.indexOf(contact), 1)
            },
            register() {
                this.persons.push({
                    fullname: this.fullname,
                    nickname: this.nickname,
                    address: this.address,
                    contactList: this.contactList,
                    contacted: false
                })
                this.fullname = ''
                this.nickname = ''
                this.address = ''
                this.contactList = []
            },
            clear() {
                this.contactInfo = ''
            }
        },
        computed: {
            isComplete() {
                return this.fullname != '' && this.nickname != '' && this.address != '' && this.contactList != ''
            },
            fulfill() {
                return this.contactInfo != ''
            }
        }
    }
</script>

<style scoped>
    .registration { margin-top: 150px; }
    .contacted { text-decoration: line-through; }
    .contact-list { margin: 20px; }
    .contact-list li .btn { padding: 5px 10px; border-radius: 50%; font-weight: 800; }
    .panel { margin: 20px; }
    hr { color: #000000; }
</style>