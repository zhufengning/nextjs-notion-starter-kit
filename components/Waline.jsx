import React, { useEffect, useRef } from 'react';
import { init } from '@waline/client';

//import { WalineInstance} from '@waline/client';

//export WalineOptions = Omit<WalineInitOptions, 'el'> & { path: string };

export const Waline = (props) => {
  const walineInstanceRef = useRef();
  const containerRef = React.createRef();

  useEffect(() => {
    walineInstanceRef.current = init({
      el: containerRef.current,
      ...props
    });

    return () => walineInstanceRef.current?.destroy();
  }, []);

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, props);

  return <div ref={containerRef} />;
};
