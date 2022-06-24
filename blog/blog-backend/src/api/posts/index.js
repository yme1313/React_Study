import Router from 'koa-router';
import * as postsCtrl from './post.ctrl'

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

const post = new Router();

post.get('/:id', postsCtrl.read);
post.delete('/:id', postsCtrl.remove);
post.patch('/:id', postsCtrl.update);

posts.use('/:id', postsCtrl.checkObjrectId, post.routes());

export default posts;