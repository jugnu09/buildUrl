export const ModuleName = {
    'CUST_REGISTRATION': 'registration',
    'ADMIN_MODULE': 'admin'
}

export const ModuleMapper = {
    'registration': 'regBaseURl',
    'admin': 'adminBaseUrl'
}
export const ApiConfig = {
    reqName : {
        dashboardEntity : {
            module: ModuleName.CUST_REGISTRATION,
            endPoint : '/users/:id'
        },
        registrationEntity: {
            module: ModuleName.ADMIN_MODULE,
            endPoint: '/users/:id'
        },
        dashboardEntityNew : {
            module: ModuleName.CUST_REGISTRATION,
            endPoint : '/users'
        },
    }
};