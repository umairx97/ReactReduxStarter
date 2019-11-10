import AuthActions from '../actions/authActions'
import axios from 'axios';
import Path from 'Config/Path'

class AuthMiddleware {
  static userLoginMiddleware = (data) => {
    return dispatch => {

      axios.get(Path.AUTHENTICATE).then(response => {

        dispatch(AuthActions.userLoginSuccess({ user: response.data.data }))

      }).catch(err => {
        console.log(err.message)
        dispatch(AuthActions.userLoginFail({ success: false, errorMessage: "Something went wrong please try again" }))

      })
    }
  }

}

export default AuthMiddleware