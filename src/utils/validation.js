
class Validation {
    static validateLogin (form) {
        if (form.email.length<9 || !form.email.includes('@')) {
            return 'Email is invalid'
        }
        if (form.password.length===0) {
            return 'Password is empty'
        }
        return null
    }
    static validateRegistration (form) {
        if (form.username.length<4) {
            return 'Username is invalid'
        }
        if (form.email.length<9 || !form.email.includes('@')) {
            return 'Email is invalid'
        }
        if (form.password.length===0) {
            return 'Password is empty'
        }
        return null
    }
}

export default Validation