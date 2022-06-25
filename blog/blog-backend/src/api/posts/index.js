import Router from 'koa-router';
import checkLoggedIn from '../../lib/ckeckLoggedIn';
import * as postsCtrl from './post.ctrl'

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn ,postsCtrl.write);

const post = new Router();

post.get('/', postsCtrl.read);
post.delete('/', postsCtrl.checkOwnPost ,postsCtrl.remove);
post.patch('/', postsCtrl.checkOwnPost ,postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;