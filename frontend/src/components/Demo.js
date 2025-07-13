import React, { useState } from 'react';
import DemoIntro from './demo/DemoIntro';
import DemoLoading from './demo/DemoLoading';
import DemoLogin from './demo/DemoLogin';
import DemoMap from './demo/DemoMap';
import DemoDashboard from './demo/DemoDashboard';

const Demo = () => {
  const [demoStage, setDemoStage] = useState('intro');
  const [demoData, setDemoData] = useState({});

  const handleStageChange = (stage, data = {}) => {
    setDemoStage(stage);
    setDemoData({ ...demoData, ...data });
  };

  const renderStage = () => {
    switch (demoStage) {
      case 'intro':
        return <DemoIntro onContinue={() => handleStageChange('loading')} />;
      case 'loading':
        return <DemoLoading onComplete={() => handleStageChange('login')} />;
      case 'login':
        return <DemoLogin onSuccess={() => handleStageChange('map')} />;
      case 'map':
        return <DemoMap onEnter={() => handleStageChange('dashboard')} />;
      case 'dashboard':
        return <DemoDashboard data={demoData} />;
      default:
        return <DemoIntro onContinue={() => handleStageChange('loading')} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      {renderStage()}
    </div>
  );
};

export default Demo;