import IceCreamGhostModel from '@/components/three/models/IceCreamGhostModel';
import PortFolioModel from '@/components/three/models/PortFolioModel';
import Scene from '@/components/three/scene';
import { useIsMobile } from '@/hooks/useIsMobile';
import { Position } from '@/types/three';

export default function HomeThreeCanvas() {
  const isMobile = useIsMobile();
  const portfolioPosition: Position = isMobile ? [0, 0, 0.5] : [0, -1, 0.5];
  const portfolioMaxPosition: Position = isMobile ? [0, 0, 8] : [0, -1, 8];

  return (
    <Scene>
      <PortFolioModel
        baseColor="wheat"
        scale={isMobile ? 0.6 : 1}
        position={portfolioPosition}
        maxPosition={portfolioMaxPosition}
      />
      <IceCreamGhostModel position={[0, -2, -0.5]} />
    </Scene>
  );
}
