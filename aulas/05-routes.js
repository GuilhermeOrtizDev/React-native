import{createStackNavigator} from 'react-navigation';
import Login from './05-login';
import Home from './05-home';

export default createStackNavigator({
    Login,
    Home    
},{
    navigationOptions:{
        headerStyle: {
            backgroundColor: "#15ccd6"
        },
        headerTintColor: "#FFF"
    },
})