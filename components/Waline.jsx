import React, { useEffect, useRef } from 'react';
import { init } from '@waline/client';

//import { WalineInstance, WalineInitOptions } from '@waline/client';

//export WalineOptions = Omit<WalineInitOptions, 'el'> & { path: string };

export const Waline = (props) => {
  const walineInstanceRef = useRef<WalineInstance | null>(null);
  const containerRef = React.createRef();

  useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
    });

    return () => walineInstanceRef.current?.destroy();
  }, []);

  useEffect(() => {
    walineInstanceRef.current?.update(props);
  }, props);

  return <div ref={containerRef} />;
};
