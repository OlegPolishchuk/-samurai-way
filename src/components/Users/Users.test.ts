import {v1} from "uuid";
import usersReducer, {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";



const initialState = {
    users: [
        {id: v1(),  fullName: 'Dmity', status: '', location: {city: 'Minsk', country: 'Belarus'}, followed: false },
        {id: v1(),  fullName: 'Sasha', status: 'Im a boss', location: {city: 'Moscow', country: 'Russia'}, followed: true },
        {id: v1(),  fullName: 'Alex', status: 'Someone probably was here', location: {city: 'Kiev', country: 'Ukraine'}, followed: true }
    ] as Array<UserType>
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
        {id: v1(),  fullName: 'Oleg', status: 'Im a boss', location: {city: 'Minsk', country: 'Belarus'}, followed: true },
        {id: v1(),  fullName: 'Superman', status: 'Superman', location: {city: 'NY', country: 'USA'}, followed: true }
    ]

    const endState = usersReducer(initialState, setUsersAC(newUsers))

    expect(endState.users.length).toBe(5)
    expect(initialState.users.length).toBe(3)
    expect(initialState === endState).toBe(false)

})