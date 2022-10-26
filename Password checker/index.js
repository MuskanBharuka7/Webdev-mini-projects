var app = new Vue({
  el: '#app',
  data: {
    password: ""
    
  },
  computed: {
    number :function() {return /\d/.test(this.password)},
    lowercase:function() {return /[a-z]/.test(this.password)},
    uppercase:function() { return/[A-Z]/.test(this.password)},
    character: function() {return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(this.password)}

  }
   
});
