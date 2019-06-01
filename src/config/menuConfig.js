const menuList = [
    {
        title: 'Home',
        key: '/home'
    },
    {
        title: 'UI',
        key: '/ui',
        children: [
            {
                title: 'Button',
                key: '/admin/ui/buttons',
            },
            {
                title: 'Popover',
                key: '/admin/ui/modals',
            },
            {
                title: 'Loading',
                key: '/admin/ui/loadings',
            },
            {
                title: 'Notification',
                key: '/admin/ui/notification',
            },
            {
                title: 'Message',
                key: '/admin/ui/messages',
            },
            {
                title: 'Tab',
                key: '/admin/ui/tabs',
            },
            {
                title: 'Gallery',
                key: '/admin/ui/gallery',
            },
            {
                title: 'Carousel',
                key: '/admin/ui/carousel',
            }
        ]
    },
    {
        title: 'form',
        key: '/admin/form',
        children: [
            {
                title: 'login',
                key: '/admin/form/login',
            },
            {
                title: 'reg',
                key: '/admin/form/reg',
            }
        ]
    },
    {
        title: 'table',
        key: '/admin/table',
        children: [
            {
                title: 'basic table',
                key: '/admin/table/basic',
            },
            {
                title: 'high table',
                key: '/admin/table/high',
            }
        ]
    },
    {
        title: 'rich text',
        key: '/admin/rich'
    },
    {
        title: 'city',
        key: '/admin/city'
    },
    {
        title: 'order',
        key: '/admin/order',
        btnList: [
            {
                title: 'detail',
                key: '/admin/detail'
            },
            {
                title: 'finish',
                key: '/admin/finish'
            }
        ]
    },
    {
        title: 'user',
        key: '/admin/user'
    },
    {
        title: 'bikeMap',
        key: '/admin/bikeMap'
    },
    {
        title: 'charts',
        key: '/admin/charts',
        children: [
            {
                title: 'bar',
                key: '/admin/charts/bar'
            },
            {
                title: 'pie',
                key: '/admin/charts/pie'
            },
            {
                title: 'line',
                key: '/admin/charts/line'
            },
        ]
    },
    {
        title: 'permission',
        key: '/admin/permission'
    },
];
export default menuList;