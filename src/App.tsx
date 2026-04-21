import { Navigate, Route, Routes } from 'react-router-dom';
import Shell from './components/Shell';
import CastingCall from './screens/CastingCall';
import Home from './screens/Home';
import ActMap from './screens/ActMap';
import Player from './screens/Player';
import Mazel from './screens/Mazel';
import Jackhole from './screens/Jackhole';
import Recap from './screens/Recap';
import Reunion from './screens/Reunion';
import RawtInHail from './screens/RawtInHail';
import StreakBreak from './screens/StreakBreak';
import AfterShow from './screens/AfterShow';
import SpoilerAlert from './screens/SpoilerAlert';
import SeriesFinale from './screens/SeriesFinale';

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<Navigate to="/casting-call" replace />} />
        <Route path="/casting-call" element={<CastingCall />} />
        <Route path="/home" element={<Home />} />
        <Route path="/act-map" element={<ActMap />} />
        <Route path="/play" element={<Player />} />
        <Route path="/mazel" element={<Mazel />} />
        <Route path="/jackhole" element={<Jackhole />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/reunion" element={<Reunion />} />
        <Route path="/rawt-in-hail" element={<RawtInHail />} />
        <Route path="/streak-break" element={<StreakBreak />} />
        <Route path="/after-show" element={<AfterShow />} />
        <Route path="/spoiler" element={<SpoilerAlert />} />
        <Route path="/finale" element={<SeriesFinale />} />
        <Route path="*" element={<Navigate to="/casting-call" replace />} />
      </Route>
    </Routes>
  );
}
