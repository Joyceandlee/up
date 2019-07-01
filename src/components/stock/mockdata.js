import Mock from 'mockjs'

Mock.mock('/data', {
    'list|5': [{
        "name|+1": "@NAME",
        "number|+1": 1,
        "add": false
    }]
})