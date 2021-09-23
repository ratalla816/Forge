<<<<<<< HEAD
 // // completed by Rob on 9/22 @ 1548
=======
 // completed by Rob on 9/22 @ 1547
>>>>>>> develop
 // expects {title: 'Facebook acquires Forge for $18 billion!', post_url: 'https://forge-team.herokuapp.com/', user_id: 1}

import Comment from "../api/post-routes";

test('confirm title', () => {
    const title = new comment_text('Facebook acquires Forge for $18 billion!');
    expect(req.body.title()).toBe('Facebook acquires Forge for $18 billion!');
})

test('post_url', () => {
    const post_url = new post_url('https://forge-team.herokuapp.com/');
    expect(req.body.title()).toBe('https://forge-team.herokuapp.com/');
})

test('confirm user_id', () => {
    const user_id = new user_id('1');
    expect(req.session.user_id()).toBe('1');
})