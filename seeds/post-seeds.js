const { Post } = require('../models');

const postSeeds = [
    {
        user_id: 1,
        title: 'How do you maintain multiple variations of a github repo?',
        url: 'github.com',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!'
    },
    {
        user_id: 3,
        title: 'Interview went great! You are worth more than you think!',
        body: 'Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.'
    },
    {
        user_id: 8,
        title: "I can't figure out how to get the async/await function to work instead of promises.",
        url: 'github.com',
        body: 'Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.'
    },
    {
        user_id: 2,
        title: "What it's like working for Google",
        body: 'Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe.'
    },
    {
        user_id: 7,
        title: 'How do I properly parse and filter the following JSON objects?',
        url: 'github.com',
        body: 'Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!'
    },
    {
        user_id: 4,
        title: 'Is there a C# equivalent of JavaScript window object?',
        url: 'github.com',
        body: 'Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. '
    },
    {
        user_id: 6,
        title: 'What it is like to be a TA for bootcamp!',
        body: 'Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. '
    },
    {
        user_id: 5,
        title: 'Number not updating when button is clicked',
        url: 'github.com',
        body: 'Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. '
    },
    {
        user_id: 1,
        title: 'Getting the error - array.push not a function',
        url: 'github.com',
        body: 'Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. '
    },
    {
        user_id: 6,
        title: 'The I went to the best Technology Webinar this weekend',
        body: 'Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat.'
    },
    {
        user_id: 3,
        title: 'Help with parallax scrolling!',
        url: 'github.com',
        body: 'Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!'
    },
    {
        user_id: 2,
        title: 'How can I clean up my code?',
        url: 'github.com',
        body: 'Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? '
    }
];

const posts = () => Post.bulkCreate(postSeeds, {individualHooks: true});

module.exports = posts;