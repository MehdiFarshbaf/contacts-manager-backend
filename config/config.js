export const permissionsList = [
    { id: 0, title: "dashboard", key: "dashboard" },
    { id: 1, title: "admins", key: "admins" },
    { id: 2, title: "create admins", key: "create_admin" },
    { id: 3, title: "delete admin", key: "delete_admin" },
    { id: 4, title: "update admin", key: "update_admin" },
    { id: 5, title: "users", key: "users" },
    { id: 6, title: "update user", key: "update_user" },
    { id: 7, title: "delete user", key: "delete_user" },
    { id: 8, title: "category", key: "category" },
    { id: 9, title: "create category", key: "create_category" },
    { id: 10, title: "update category", key: "update_category" },
    { id: 11, title: "delete category", key: "delete_category" },
    { id: 12, title: "roles", key: "roles" },
    { id: 13, title: "create role", key: "create_role" },
    { id: 14, title: "update role", key: "update_role" },
    { id: 15, title: "delete role", key: "delete_role" },
    { id: 16, title: "site setting", key: "site_setting" }
]
export const superAdminRole = {
    name: 'super admin',
    key: 'super_admin',
    permissions: permissionsList
}
export const superAdmin = {
    email: 'mehdifarshbaf92@gmail.com',
    password: 'Mehdi14439',
    mobile: '09039067633',
    fullname: 'Mehdi Farshbaf'
}
export const allowTypesImages = ['.jpg', '.jpeg', '.png']

export const baseURL = "https://back-contacts.farshbaf-dev.ir"
export const offlineURL = "http://localhost:5000/"