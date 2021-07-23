
import RestoDetail from '../views/pages/resto-detail';
import RestoFav from '../views/pages/resto-fav';
import RestoList from '../views/pages/resto-list';

const routes = {
    '/': RestoList,
    '/list': RestoList,
    '/fav': RestoFav,
    '/detail/:id': RestoDetail,
};

export default routes;
