<<<<<<< HEAD
// completed by Rob on 9/22 @ 1548
=======
// completed by Rob on 9/22 @ 1547
>>>>>>> develop
// expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}

import Comment from "../api/comment-routes";

test('confirm comment_text', () => {
    const comment_text = new comment_text('Running tests is my favorite part of coding!');
    expect(req.body.comment_text()).toBe('Running tests is my favorite part of coding!');
})

test('confirm user_id', () => {
    const user_id = new user_id('1');
    expect(req.session.user_id()).toBe('1');
})

test('post_id', () => {
    const post_id = new post_id('3');
    expect(req.body.post_id()).toBe('3');
})