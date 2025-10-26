import IceCreamGhostModel from '@/components/three/models/IceCreamGhostModel';
import PortFolioModel from '@/components/three/models/PortFolioModel';
import Scene from '@/components/three/scene';

export default function HomeThreeCanvas() {
  return (
    <Scene>
      <PortFolioModel position={[0, -1, 0.5]} baseColor="wheat" />
      <IceCreamGhostModel position={[0, -2, 0.5]} />
    </Scene>
  );
}
