import {v1} from "uuid";
import usersReducer, {UserType} from "../../redux/users-reducer/users-reducer";
import {followAC, setUsersAC, unFollowAC} from "../../redux/users-reducer/action-creators";




const initialState = {
    users: [
        {id: v1(),  name: 'Dmity', status: '', followed: false },
        {id: v1(),  name: 'Sasha', status: 'Im a boss', followed: true },
        {id: v1(),  name: 'Alex', status: 'Someone probably was here', followed: true }
    ] as Array<UserType>,
    totalCount: 0,
    pageSize: 0,
    currentPage: 0,
    isFetching: false
}

test('Case FOLLOW should set in InitialState property "followed" to true', () => {

    const userId = initialState.users[0].id

    const endState = usersReducer(initialState, followAC(userId))

    expect(endState.users[0].followed).toBe(true)
    // проверяем на мутабельность. Так как в редюсере мы  возвращаем копию стейта,
    // initialState должен остаться без изменений
    expect(initialState.users[0].followed).toBe(false)
    expect(endState === initialState).toBe(false)

})

test('Case UNFOLLOW should set in InitialState property "followed" to false ', () => {


    const userId = initialState.users[2].id

    const endState = usersReducer(initialState, unFollowAC(userId))

    expect(endState.users[2].followed).toBe(false)
    // проверяем на мутабельность. Так как в редюсере мы  возвращаем копию стейта,
    // initialState должен остаться без изменений
    expect(initialState.users[2].followed).toBe(true)
    expect(endState === initialState).toBe(false)

})

test('Case SET-USERS should concat users with newUsers', () => {

    const newUsers = [
        {id: v1(),  name: 'Oleg', status: 'Im a boss', followed: true, photos: {small: '', large: ''} },
        {id: v1(),  name: 'Superman', status: 'Superman', followed: true, photos: {small: '', large: ''} }
    ]

    const endState = usersReducer(initialState, setUsersAC(newUsers))

    expect(endState.users.length).toBe(5)
    expect(initialState.users.length).toBe(3)
    expect(initialState === endState).toBe(false)

})