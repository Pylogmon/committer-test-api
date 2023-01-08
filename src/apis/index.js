
const apis = [
    {
        method: 'POST',
        path: '/api/committer/login',
        name: '登陆',
        params: {
            user_name: '用户名',
            password: '密码'
        }
    },
    {
        method: 'POST',
        path: '/api/committer/commit',
        name: '提交工单'
    },
    {
        method: 'GET',
        path: '/api/committer/get_product_list',
        name: '获取产品列表'
    },
    {
        method: 'GET',
        path: '/api/committer/get_project_list',
        name: '获取项目列表',
        params: {
            product_id: '产品id'
        }
    },
    {
        method: 'GET',
        path: '/api/committer/get_module_list',
        name: '获取模块列表',
        params: {
            product_id: '产品id',
            project_id: '项目id'
        }
    },
    {
        method: 'GET',
        path: '/api/committer/get_branch_list',
        name: '获取分支列表',
        params: {
            product_id: '产品id',
            project_id: '项目id',
            module_id: '模块id'
        }
    },
    {
        method: 'GET',
        path: '/api/committer/get_commit_list',
        name: '获取提单列表',
        params: {
            creator: '创建者id',
            assigned: '指派者id'
        }
    },
    {
        method: 'GET',
        path: '/api/committer/get_user_list',
        name: '获取用户列表'
    }
]

export default apis