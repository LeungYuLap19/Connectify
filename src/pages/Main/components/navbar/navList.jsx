import Home from '../../../home/components/container/Index';
import Search from '../../../search/components/container/Index';
import Message from '../../../message/components/container/Index';
import Notifications from '../../../notifications/components/container/Index';
import Create from '../../../postCreate/components/container/Index';
import Setting from '../../../setting/components/container/Index';

export const navListName = [
    {name: 'Home', icon: '/assets/images/home.png', component: <Home />},
    {name: 'Search', icon: '/assets/images/search.png', component: <Search />},
    {name: 'Messages', icon: '/assets/images/messages.png', component: <Message />},
    {name: 'Notifications', icon: '/assets/images/notifications.png', component: <Notifications />},
    {name: 'Create', icon: '/assets/images/create.png', component: <Create />},
    {name: 'Settings', icon: '/assets/images/settings.png', component: <Setting />}
];
