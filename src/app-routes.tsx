import { HomePage, ExamplePage, ProfilePage, SegmentTree, SegmentDiagram } from './pages/_index';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/example',
        element: ExamplePage
    },
    {
        path: '/profile',
        element: ProfilePage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/SegmentTree',
        element: SegmentTree
    },
    {
        path: '/SegmentDiagram',
        element: SegmentDiagram
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
