export const STAKEHOLDERS = [
  {
    id: 'architect',
    role: 'Architect',
    icon: '🏛️',
    description: 'Coordinates design intent across clients & consultants',
    friction: 'Revisions, Approvals & Drawing version overload',
    activeCount: 4
  },
  {
    id: 'interior',
    role: 'Interior Designer',
    icon: '🎨',
    description: 'Material selections, finishes & sample approvals',
    friction: '1,000+ material calls & shade discrepancies',
    activeCount: 12
  },
  {
    id: 'owner',
    role: 'Project Owner',
    icon: '💼',
    description: 'Financial backer & high-level decision maker',
    friction: 'Paying continuously, rarely seeing real-time progress',
    activeCount: 2
  },
  {
    id: 'supplier',
    role: 'Material Supplier',
    icon: '📦',
    description: 'Provides quotes, stock checks & site deliveries',
    friction: 'Re-quoting same items, interpreting vague specs',
    activeCount: 8
  },
  {
    id: 'consultant',
    role: 'Consultant (MEP/Structural)',
    icon: '📐',
    description: 'Structural & MEP technical calculations & markups',
    friction: 'Checking which drawing revision is live',
    activeCount: 3
  },
  {
    id: 'contractor',
    role: 'Contractor',
    icon: '👷',
    description: 'Turns drawings into built work on site',
    friction: 'Wrong revisions, rework & missing execution details',
    activeCount: 6
  },
  {
    id: 'fabricator',
    role: 'Fabricator',
    icon: '⚙️',
    description: 'Shop drawings & custom component manufacturing',
    friction: 'Late design changes forcing remaking of components',
    activeCount: 5
  },
  {
    id: 'installer',
    role: 'Specialist Installer',
    icon: '🔧',
    description: 'Final installation of specialized facades & fixtures',
    friction: 'Access clashes & being last in, blamed first',
    activeCount: 2
  }
];

export const INBOUND_FEED = [
  {
    id: 'msg-1',
    channel: 'whatsapp',
    sender: 'Client (Mr. Malhotra)',
    time: '10:14 AM',
    text: 'Use the previous Italian marble shade for the living room floor.',
    status: 'Action Extracted',
    tag: 'Material Change'
  },
  {
    id: 'msg-2',
    channel: 'email',
    sender: 'Structural Consultant',
    time: '09:45 AM',
    text: 'Please refer Rev 04 drawings for column reinforcement calculations.',
    status: 'Revision Stamped',
    tag: 'Drawing Rev 04'
  },
  {
    id: 'msg-3',
    channel: 'site',
    sender: 'Contractor Dave',
    time: '08:30 AM',
    text: 'Site team needs clarification on master bathroom plumbing tolerance.',
    status: 'Pending Answer',
    tag: 'Site Friction'
  },
  {
    id: 'msg-4',
    channel: 'supplier',
    sender: 'Classic Marble Supplier',
    time: 'Yesterday',
    text: 'Shade 312 unavailable for 3 weeks. Suggesting Shade 315 as alternative.',
    status: 'Quote Discrepancy',
    tag: 'Stock Out'
  },
  {
    id: 'msg-5',
    channel: 'drawings',
    sender: 'Lead Architect',
    time: 'Yesterday',
    text: 'REV 05 Architectural Drawings uploaded to cloud repository.',
    status: 'Live Version',
    tag: 'REV 05'
  }
];

export const VOICE_INTENT_KNOWLEDGE = {
  marble: {
    intent: 'Material Specification & Supplier Query',
    role: 'Interior Designer & Supplier',
    entity: 'Italian Marble Shade 312 vs 315',
    action: 'Client approved Shade 315 alternative. Supplier notified for stock dispatch.',
    responseSpeech: 'The client has approved Italian Marble Shade 315 as an alternative. Supplier has been notified for site dispatch.'
  },
  rev05: {
    intent: 'Drawing Revision & Version Control',
    role: 'Architect & Contractor',
    entity: 'Drawing REV 05 Uploaded',
    action: 'Stamped REV 05 as active live version across all 8 stakeholder channels.',
    responseSpeech: 'Revision 05 is currently the live stamped drawing. All contractor markups have been synced.'
  },
  contractor: {
    intent: 'Site Execution Clarification',
    role: 'Contractor & Structural Consultant',
    entity: 'Master Bathroom Plumbing Tolerance',
    action: 'Forwarded technical inquiry to Structural Consultant with Rev 04 reference.',
    responseSpeech: 'The plumbing tolerance query from Contractor Dave has been forwarded to the Structural Consultant.'
  },
  summary: {
    intent: 'Project Communication Summarization',
    role: 'All 8 Project Stakeholders',
    entity: 'Project Alpha Milestone Status',
    action: 'Synthesized 6 unstructured channels into 3 key actionable decisions.',
    responseSpeech: 'Here is your project summary: Revision 05 drawings are live, Shade 315 marble is approved, and contractor site queries are being addressed.'
  }
};
