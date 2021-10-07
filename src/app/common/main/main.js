import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../../modules/home/home';
import AssetTracking from '../../modules/asset-tracking/asset-tracking';

export default function main() {
    return (
        <div>
            <Switch>
                <Route exact path="/" render={() => <Home />}></Route>
                <Route exact path="/asset-tracking" render={() => <AssetTracking />}></Route>
                <Route exact path="**" render={() =>
                    <>
                        <div>404</div>
                        <div>Not Found</div>
                    </>
                }>
                </Route>
            </Switch >
        </div>
    )
}
