import * as Yup from 'yup'

export const createUserSchema = Yup.object().shape({
    email: Yup.string().required("ایمیل برای مدیر الزامی است.").email("ایمیل وارد شده معتبر نمی باشد."),
    firstName: Yup.string().required("نام الزامی است.").min(3,""),
    lastName: Yup.string().required("نام خانوادگی الزامی است.").min(3,""),
    category_id: Yup.string().required("شناسه دسته بندی الزامی است."),
    job: Yup.string().required("شغل الزامی است.").min(3,""),
    mobile: Yup.string().matches(/^(\+98?)?{?(0?9[0-9]{9,9}}?)$/, 'شماره موبایل معتبر نیست').required('موبایل الزامی می باشد.').length(11, 'طول شماره تلفن باید 11 کاراکتر باشد.'),

})