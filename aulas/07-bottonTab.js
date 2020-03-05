import {createAppContainer,  createBottomTabNavigator} from 'react-navigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import Home from './06-home';
import Profile from './06-profile';
import Settings from './06-settings';

const myTabNavigator = createBottomTabNavigator(
    {
        Home: Home,
        Profile: Profile,
        Settings: Settings
    },{
        tabBarOptions: {
            activeTintColor: "#34495e",
            inactiveTinColor: "#bdc3c7",
            style: {
                backgroundcolor: "#ecf0f1"
            },
            showLabel: true
        },
        defaultNavigationOptions:({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) =>{
                const{routeName} = navigation.state;
                let IconComponent = FontAwesome5;
                let iconName;
                if(routeName === "Home")
                    iconName = 'home';
                else if (routeName === "Profile")
                    iconName = 'user-alt';
                else if (routeName === "Settings")
                iconName = 'cog';

                return <IconComponent name={iconName} size={24} color={tintColor}/>
            }
        })
    }
)

export default createAppContainer(myTabNavigator);