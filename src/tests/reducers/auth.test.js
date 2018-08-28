import authReducer from '../../reducers/auth';

test('should set user id when logging in', () => {
    const action = {
        type: 'LOGIN',
        uid: 'testuserid'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should clear user id when logging out', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'nothing' }, action);
    expect(state).toEqual({});
});