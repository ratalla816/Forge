<<<<<<< HEAD
// completed by Rob on 9/22 @ 1548
=======
// completed by Rob on 9/22 @ 1547
>>>>>>> develop
//expects {username: 'test', email: 'testgmail.com', password: 'password1234'}


import User from "../api/user-routes";

test('confirm username', () => {
    const user = new user('ratalla816');
    expect(req.session.username()).toBe('ratalla816');
})

test('confirm email', () => {
    const user = new User('rob.atalla@robatalla816.com');
    expect(user.getEmail()).toBe('rob.atalla@robatalla816.com');
})


