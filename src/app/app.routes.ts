import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
    { path: 'game', loadChildren: () => import('./game/game.module').then(m => m.GameModule) },
    // Add similar routes for other modules
];
