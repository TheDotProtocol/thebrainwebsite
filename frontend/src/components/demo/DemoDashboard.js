import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DemoDashboard = ({ data }) => {
  const [activeTab, setActiveTab] = useState('intelligence');
  const [activeDivision, setActiveDivision] = useState('army');
  const [chiefUnlocked, setChiefUnlocked] = useState(false);
  const [activeModule, setActiveModule] = useState(null);
  const navigate = useNavigate();

  const modules = [
    {
      id: 'shiva',
      name: 'SHIVA',
      subtitle: 'Combat AI Module',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 114 0 2 2 0 01-4 0z"/>
        </svg>
      ),
      content: {
        status: '✅ ACTIVE',
        details: [
          'Autonomous Threat Zones Detected: 3',
          'Engagement Protocol: Defensive Only',
          'Last Neutralization: 1m 42s ago',
          'Civilian Risk Index: 0.01%'
        ]
      }
    },
    {
      id: 'shakti',
      name: 'SHAKTI',
      subtitle: 'Civilian & Disaster Intel',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      content: {
        status: '✅ ACTIVE',
        details: [
          'Surveillance UAVs Deployed: 12',
          'Border Infiltration Alerts: 2',
          'Medical Supply Drone ETA: 14 mins',
          'Biometric Watchlist Matches: 1'
        ]
      }
    },
    {
      id: 'arjuna',
      name: 'ARJUNA',
      subtitle: 'Ethics & Strike AI',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ),
      content: {
        status: '🟡 MONITORING',
        details: [
          'Pending Strike Recommendations: 2',
          'Civilian Radius Violations: 0',
          'Geneva Compliance Score: 99.9%',
          'Target Escalation Priority: RED'
        ]
      }
    },
    {
      id: 'sigma',
      name: 'SIGMA GRID',
      subtitle: 'AI Command Mesh',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      ),
      content: {
        status: '✅ ONLINE',
        details: [
          'Connected Nodes: 128',
          'Relay Lag: 12ms',
          'Quantum Sync Integrity: 100%',
          'Zero Trust Relays Active: 41'
        ]
      }
    },
    {
      id: 'brainsat',
      name: 'BRAINSAT',
      subtitle: 'Orbital ISR Network',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 12a2 2 0 114 0 2 2 0 01-4 0z"/>
          <path d="M10 6a4 4 0 100 8 4 4 0 000-8z"/>
        </svg>
      ),
      content: {
        status: '🛰 LOCKED TO AOI',
        details: [
          'LEO Feed Link: Live',
          'Thermal Overlays: Enabled',
          'Unknown Aerial Objects Detected: 2',
          'Satellite Drift: 0.003°'
        ]
      }
    }
  ];

  const handleModuleClick = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  const renderIntelligenceCorner = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brain-gold mb-4">Intelligence Corner</h2>
      
      {/* Enemy Chat Groups */}
      <div className="space-y-4">
        <div className="glass-morphism rounded-lg p-4 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-red-400 mb-3">Chat Group Alpha (Simulated Cross-border Cell)</h3>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex justify-between">
              <span className="text-gray-400">User1:</span>
              <span className="text-gray-300">"Meet at Bravo Point tomorrow"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">User2:</span>
              <span className="text-gray-300">"Which drop zone?"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">User1:</span>
              <span className="text-gray-300">"Sierra 3 confirmed. Plan Zulu."</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">User3:</span>
              <span className="text-gray-300">"Brain thinks we're still on Charlie."</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brain-gold font-bold">[The Brain AI]:</span>
              <span className="text-green-400">"Plan change confirmed: Rendezvous at Delta 4 instead. Code shift initiated."</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">User2:</span>
              <span className="text-red-300">"Wait. What? HQ never said that."</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">User1:</span>
              <span className="text-red-300">"Abort. Something's off."</span>
            </div>
            <div className="text-xs text-gray-500 mt-2 animate-typing">typing...</div>
          </div>
        </div>

        <div className="glass-morphism rounded-lg p-4 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-red-400 mb-3">Chat Group Beta (Disguised Drug Ring)</h3>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex justify-between">
              <span className="text-gray-400">DealerBoss:</span>
              <span className="text-gray-300">"Package flying via drone tonight"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Courier1:</span>
              <span className="text-gray-300">"Which route?"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">DealerBoss:</span>
              <span className="text-gray-300">"Same sky lane as last week"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brain-gold font-bold">[The Brain AI]:</span>
              <span className="text-green-400">"Sky lane now flagged. Reroute to East."</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Courier1:</span>
              <span className="text-red-300">"We never agreed on East!?"</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">DealerBoss:</span>
              <span className="text-red-300">"Who's leaking info here??"</span>
            </div>
            <div className="text-xs text-gray-500 mt-2 animate-typing">typing...</div>
          </div>
        </div>
      </div>

      <button className="bg-brain-gold/20 text-brain-gold py-2 px-4 rounded-lg font-semibold hover:bg-brain-gold hover:text-brain-black transition-colors hover:ring-2 hover:ring-yellow-400 hover-scale">
        Watch AI Response
      </button>
    </div>
  );

  const renderArmyPanel = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brain-gold mb-4">🪖 ARMY PANEL – Ground Surveillance & Border Integrity</h2>
      
      {/* Status Header */}
      <div className="glass-morphism rounded-lg p-4 border-l-4 border-green-500">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-green-400">Status: ACTIVE</h3>
          <span className="text-sm text-gray-400">Zone Monitored: LOC (North), LAC (East), IB (West)</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-orange-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale animate-alert-pulse">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">🟠 Unauthorized Movement Detected — Poonch Sector</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Thermal Signature:</span>
              <span className="text-gray-300">3 bipedal entities</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Direction:</span>
              <span className="text-gray-300">Southbound, 1.2 km inside Indian territory</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Time:</span>
              <span className="text-gray-300">04:13 hrs</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Risk:</span>
              <span className="text-red-400">Suspected infiltration team</span>
            </div>
          </div>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Deploy UAV Eye
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Engage Perimeter Lights
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Silent Intercept: YES/NO
            </button>
          </div>
        </div>

        <div className="glass-morphism rounded-lg p-4 border-l-4 border-yellow-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">🟡 Minefield Alert – Sikkim LAC</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Alert Trigger:</span>
              <span className="text-gray-300">Underground vibration anomaly</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Prediction:</span>
              <span className="text-gray-300">Possible border breaching tunnel (confirmed in 12 hrs if seismic continues)</span>
            </div>
          </div>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Deploy BORE-SCAN Drone
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Alert SHAKTI Module
            </button>
          </div>
        </div>

        {/* The Brain™ Commentary */}
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-brain-gold bg-brain-gold/5">
          <h3 className="text-lg font-semibold text-brain-gold mb-2">The Brain™ Commentary:</h3>
          <p className="text-gray-300 italic">"Probability of deception pattern: 82%. Recommends intercept with non-lethal recon teams within 18 minutes."</p>
        </div>
      </div>
    </div>
  );

  const renderNavyPanel = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brain-gold mb-4">⚓ NAVY PANEL – Maritime Monitoring & Coastal Intelligence</h2>
      
      {/* Status Header */}
      <div className="glass-morphism rounded-lg p-4 border-l-4 border-yellow-500">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-yellow-400">Status: ON STANDBY</h3>
          <span className="text-sm text-gray-400">Current Focus: Arabian Sea, Bay of Bengal, Andaman Waters</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-red-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-red-400 mb-2">🔴 AIS Conflict Detected – 72 NM off Lakshadweep</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Vessel Type:</span>
              <span className="text-gray-300">Trawler class, unflagged</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">AIS ID:</span>
              <span className="text-gray-300">Matches two known Pakistani civilian fishing vessels</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Trajectory:</span>
              <span className="text-gray-300">Erratic, off corridor</span>
            </div>
          </div>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Launch Autonomous Surface Drone
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Acoustic ID Ping
            </button>
          </div>
        </div>

        <div className="glass-morphism rounded-lg p-4 border-l-4 border-yellow-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">🟡 Pirate Cluster Signal – Eastern Corridor, South Nicobar</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Intercepted Chat:</span>
              <span className="text-gray-300">"Loadout by 03:00. No navy near the lane."</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Payload:</span>
              <span className="text-gray-300">3 skiffs with motors over 600hp</span>
            </div>
          </div>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Alert Indian Naval Command
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Forward to SIGMA Grid for SIGINT
            </button>
          </div>
        </div>

        {/* The Brain™ Commentary */}
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-brain-gold bg-brain-gold/5">
          <h3 className="text-lg font-semibold text-brain-gold mb-2">The Brain™ Commentary:</h3>
          <p className="text-gray-300 italic">"Likelihood of spoofed civilian transponder: 93%. Suggested lock by BRAINSAT orbital scan."</p>
        </div>
      </div>
    </div>
  );

  const renderAirforcePanel = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brain-gold mb-4">✈️ AIR FORCE PANEL – Skyborne Surveillance & Threat Interception</h2>
      
      {/* Status Header */}
      <div className="glass-morphism rounded-lg p-4 border-l-4 border-green-500">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-green-400">Status: OPERATIONAL</h3>
          <span className="text-sm text-gray-400">No-Fly Zone Scan Initiated: 00:41 hrs</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-red-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-red-400 mb-2">🔴 Transponder Mismatch Alert – Eastern Corridor</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Declared Aircraft:</span>
              <span className="text-gray-300">Civilian Cargo B737</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">IR Reflection Signature:</span>
              <span className="text-gray-300">Matches MiG-29</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Speed Drift:</span>
              <span className="text-gray-300">0.23 Mach over standard</span>
            </div>
          </div>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Intercept via SU-30MKI
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Remote Transponder Decrypt
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Flag BRAINSAT
            </button>
          </div>
        </div>

        <div className="glass-morphism rounded-lg p-4 border-l-4 border-orange-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">🟠 Drone Swarm Ping – Gujarat Border</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Number Detected:</span>
              <span className="text-gray-300">17</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Altitude:</span>
              <span className="text-gray-300">4,000 ft – descending</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Formation:</span>
              <span className="text-gray-300">"W" with lead dummy (decoy pattern)</span>
            </div>
          </div>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Remote Takeover
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Deploy Net Gun Drone
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Electro-Jammer Pulse
            </button>
          </div>
        </div>

        {/* The Brain™ Commentary */}
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-brain-gold bg-brain-gold/5">
          <h3 className="text-lg font-semibold text-brain-gold mb-2">The Brain™ Commentary:</h3>
          <p className="text-gray-300 italic">"Swarm pattern mirrors prior strike formation from 2023 incursion. Immediate disruption advised."</p>
        </div>
      </div>
    </div>
  );

  const renderCommandosPanel = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brain-gold mb-4">🥷 COMMANDOS / PARA SPECIAL FORCES PANEL – Tactical Ops & Internal Strike Teams</h2>
      
      {/* Status Header */}
      <div className="glass-morphism rounded-lg p-4 border-l-4 border-green-500">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-green-400">Status: ENGAGED</h3>
          <span className="text-sm text-gray-400">Base of Ops: Northeast Jungle Corridors, Kashmir Valley, Urban Rapid Response Nodes</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-orange-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-orange-400 mb-2">🟠 Bio Trigger Pinged – Arunachal jungle sector</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Biometric Match:</span>
              <span className="text-gray-300">ID formerly presumed KIA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Heat Signature:</span>
              <span className="text-gray-300">Low crawl pattern, infrared verified</span>
            </div>
          </div>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Launch Silent Drone Scan
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Activate Stealth HALO Protocol
            </button>
          </div>
        </div>

        <div className="glass-morphism rounded-lg p-4 border-l-4 border-yellow-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">🟡 Cyber Leak Detected – Internal Commando Channel</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Message Chain:</span>
              <span className="text-gray-300">Altered strike times in encrypted comms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Cross-reference:</span>
              <span className="text-gray-300">Timing doesn't match prior op brief</span>
            </div>
          </div>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Purge Channel
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Quarantine Device
            </button>
          </div>
        </div>

        {/* The Brain™ Commentary */}
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-brain-gold bg-brain-gold/5">
          <h3 className="text-lg font-semibold text-brain-gold mb-2">The Brain™ Commentary:</h3>
          <p className="text-gray-300 italic">"Recommend digital air-gap sweep. Suggests human-level intervention within 12 mins."</p>
        </div>
      </div>
    </div>
  );

  const renderChiefPanel = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-brain-gold mb-4">🛡️ CHIEF OF DEFENCE – Strategic Multi-Domain Command</h2>
      
      {/* Status Header */}
      <div className="glass-morphism rounded-lg p-4 border-l-4 border-red-500">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-red-400">Status: HIGH ALERT</h3>
        </div>
      </div>

      {/* Unified Intel Digest */}
      <div className="glass-morphism rounded-lg p-4 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
        <h3 className="text-lg font-semibold text-brain-gold mb-3">Unified Intel Digest</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Cross-Divisional Threat Index:</span>
              <span className="text-orange-400">⚠️ 4.3 (Moderate Escalation Zone)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Real-Time Secure Channels:</span>
              <span className="text-green-400">6 active</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total Autonomous Intercepts Today:</span>
              <span className="text-gray-300">17</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Civilian Risk Index (All India):</span>
              <span className="text-green-400">0.009%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">BRAINSAT Uplink:</span>
              <span className="text-green-400">🔗 Stable @ 98.3% fidelity</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-red-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-red-400 mb-2">🚨 SIGMA Grid Node Under Probe</h3>
          <p className="text-gray-300 mb-3">Suspicious packet ping from IP tied to Hong Kong proxy chain</p>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Deploy Trace Net
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Activate SHIELD on NODE-34
            </button>
          </div>
        </div>

        <div className="glass-morphism rounded-lg p-4 border-l-4 border-yellow-500 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 hover-scale">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">🛰 BRAINSAT Satellite Drift Correction Required</h3>
          <p className="text-gray-300 mb-3">Quantum Relay Sync at 0.003° deviation</p>
          <div className="mt-3 space-x-2">
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Adjust Orbit
            </button>
            <button className="bg-brain-gold/20 text-brain-gold py-1 px-3 rounded text-sm hover:bg-brain-gold hover:text-brain-black transition-colors hover-glow">
              Run Diagnostic Sweep
            </button>
          </div>
        </div>

        {/* The Brain™ Commentary */}
        <div className="glass-morphism rounded-lg p-4 border-l-4 border-brain-gold bg-brain-gold/5">
          <h3 className="text-lg font-semibold text-brain-gold mb-2">The Brain™ Commentary:</h3>
          <p className="text-gray-300 italic">"Suggest notifying PMO and National Security Advisor. All divisions responding within threshold."</p>
        </div>
      </div>
    </div>
  );

  const renderCenterPanel = () => {
    if (activeTab === 'intelligence') return renderIntelligenceCorner();
    if (activeTab === 'threat') return renderArmyPanel();
    if (activeTab === 'enemy') return renderNavyPanel();
    if (activeTab === 'flagged') return renderAirforcePanel();
    return renderIntelligenceCorner();
  };

  const renderDivisionPanel = () => {
    if (activeDivision === 'army') return renderArmyPanel();
    if (activeDivision === 'navy') return renderNavyPanel();
    if (activeDivision === 'airforce') return renderAirforcePanel();
    if (activeDivision === 'commandos') return renderCommandosPanel();
    if (activeDivision === 'chief') return renderChiefPanel();
    return renderArmyPanel();
  };

  return (
    <div className="fixed inset-0 bg-black flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-brain-dark border-r border-brain-gold/30 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-brain-gold/30">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🧠</div>
            <div>
              <h1 className="text-lg font-bold text-brain-gold">The Brain™</h1>
              <p className="text-xs text-gray-400">SIGMA Grid Live Access</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-6 space-y-6">
          {/* Main Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Intelligence Operations
            </h3>
            <div className="space-y-2">
              {[
                { id: 'intelligence', label: 'Intelligence Corner', icon: '🔍' },
                { id: 'threat', label: 'Threat Zones', icon: '⚠️' },
                { id: 'enemy', label: 'Enemy Intrusion', icon: '🚨' },
                { id: 'flagged', label: 'Flagged Intel', icon: '🚩' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-brain-gold text-brain-black' 
                      : 'text-gray-300 hover:bg-brain-gold/20 hover:text-brain-gold'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Division Access */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Access by Division
            </h3>
            <div className="space-y-2">
              {[
                { id: 'army', label: 'Army', icon: '🎖️' },
                { id: 'navy', label: 'Navy', icon: '⚓' },
                { id: 'airforce', label: 'Air Force', icon: '✈️' },
                { id: 'commandos', label: 'Commandos/Para', icon: '🪖' }
              ].map(division => (
                <button
                  key={division.id}
                  onClick={() => setActiveDivision(division.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeDivision === division.id 
                      ? 'bg-brain-gold text-brain-black' 
                      : 'text-gray-300 hover:bg-brain-gold/20 hover:text-brain-gold'
                  }`}
                >
                  <span>{division.icon}</span>
                  <span className="text-sm font-medium">{division.label}</span>
                </button>
              ))}
              
              {/* Chief of Defence - Locked by default */}
              <div className="mt-4">
                {!chiefUnlocked ? (
                  <button
                    onClick={() => {
                      const password = prompt('Enter Chief of Defence password:');
                      if (password === 'admin') {
                        setChiefUnlocked(true);
                        setActiveDivision('chief');
                      }
                    }}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-500 hover:bg-gray-700/50"
                  >
                    <span>🔒</span>
                    <span className="text-sm font-medium">Chief of Defence Only</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveDivision('chief')}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeDivision === 'chief' 
                        ? 'bg-brain-gold text-brain-black' 
                        : 'text-gray-300 hover:bg-brain-gold/20 hover:text-brain-gold'
                    }`}
                  >
                    <span>⭐</span>
                    <span className="text-sm font-medium">Chief of Defence</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-brain-gold/30">
          <div className="text-xs text-gray-500 mb-4">
            <div>Session: Active</div>
            <div>Security Level: Maximum</div>
            <div>Last Update: {new Date().toLocaleTimeString()}</div>
          </div>
          
          {/* Exit Demo Button */}
          <button
            onClick={() => navigate('/contact')}
            className="w-full bg-red-600/20 text-red-400 py-2 px-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 hover:ring-2 hover:ring-red-500 hover-scale border border-red-500/30"
          >
            🚪 Exit Demo
          </button>
        </div>
      </div>

      {/* Center Panel */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-4xl">
          {activeTab !== 'intelligence' && activeTab !== 'threat' && activeTab !== 'enemy' && activeTab !== 'flagged' 
            ? renderDivisionPanel() 
            : renderCenterPanel()
          }
        </div>
      </div>

      {/* Fixed Vertical Module Navbar */}
      <div className="fixed right-0 bottom-0 z-50">
        {/* Desktop: Vertical Layout */}
        <div className="hidden md:flex flex-col gap-4 p-4">
          {modules.map((module, index) => (
            <div key={module.id} className="relative">
              <button
                onClick={() => handleModuleClick(module.id)}
                className="bg-[#111] text-white border border-yellow-400 rounded-lg px-4 py-2 hover:scale-105 hover:ring-2 hover:ring-yellow-500 transition-all flex items-center space-x-2"
              >
                <span className="text-yellow-400">{module.icon}</span>
                <span className="font-semibold">{module.name}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal Scrollable Layout */}
        <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {modules.map((module, index) => (
              <div key={module.id} className="relative flex-shrink-0">
                <button
                  onClick={() => handleModuleClick(module.id)}
                  className="bg-[#111] text-white border border-yellow-400 rounded-lg px-3 py-2 hover:scale-105 hover:ring-2 hover:ring-yellow-500 transition-all flex items-center space-x-2 whitespace-nowrap"
                >
                  <span className="text-yellow-400">{module.icon}</span>
                  <span className="font-semibold text-sm">{module.name}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Centered Floating Status Panel */}
      {activeModule && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] text-white border-l-4 border-yellow-400 shadow-lg p-6 rounded-md w-full max-w-md relative">
            {/* Close Button */}
            <button
              onClick={() => setActiveModule(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl transition-colors"
            >
              ×
            </button>
            
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-yellow-400 text-2xl">{modules.find(m => m.id === activeModule)?.icon}</span>
              <div>
                <h3 className="font-bold text-xl">{modules.find(m => m.id === activeModule)?.name}</h3>
                <p className="text-sm text-gray-400">{modules.find(m => m.id === activeModule)?.subtitle}</p>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Status:</span>
                <span className="text-green-400 font-semibold">{modules.find(m => m.id === activeModule)?.content.status}</span>
              </div>
              {modules.find(m => m.id === activeModule)?.content.details.map((detail, idx) => (
                <div key={idx} className="text-gray-300 border-l-2 border-gray-600 pl-3 py-1">{detail}</div>
              ))}
            </div>
            
            {/* Close Button at Bottom */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setActiveModule(null)}
                className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Radar Ping Effects */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-brain-gold rounded-full animate-radar-ping opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-brain-gold rounded-full animate-radar-ping opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-brain-gold rounded-full animate-radar-ping opacity-80" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default DemoDashboard; 