import {forwardRef, useEffect} from 'react';

const SafeAreaBottom = forwardRef(function SafeAreaBottom(props, forwardedRef) {
  const { children, className = '' } = props;

  useEffect(() => {
    // mount
    console.log('SafeAreaBottom.jsx mount');

    return () => {
      // unmount
      console.log('SafeAreaBottom.jsx unmount');
    };
  }, []);

  return (
    <>
      <div
        {...props}
        className={`SafeAreaBottom opacity-0 [[data-env-node-env="development"]_&]:opacity-100 ${className} flex h-[var(--sab)] flex-row items-center justify-start overflow-hidden bg-cyan-400 pl-[50px] text-center text-[10px]`}>
        SafeAreaBottom
      </div>
    </>
  );
});

export default SafeAreaBottom;
