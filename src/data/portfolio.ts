export type ViewKey = 'all' | 'research' | 'data' | 'semiconductor' | 'robotics';

export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  organization: string;
  summary: string;
  problem: string;
  difficulty: string;
  firstApproach: string;
  decision: string;
  implementation: string;
  result: string;
  learned: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  views: ViewKey[];
  featured: boolean;
  image?: string;
  imageAlt?: string;
  links?: LinkItem[];
};

export const profile = {
  name: 'Yuyeon Kim',
  koreanName: '김유연',
  role: 'AI Researcher · ML Engineer',
  tagline: 'I turn complex data into measurable improvements.',
  summary:
    'I build AI systems that connect research quality with real-world constraints—from topology-consistent medical surfaces to LiDAR robotics and semiconductor process optimization.',
  location: 'Seoul, South Korea',
  email: 'yuyeonkim@postech.ac.kr',
  github: 'https://github.com/Yuyeon-Kim',
};

export const views: { key: ViewKey; label: string; shortLabel: string }[] = [
  { key: 'all', label: 'All experience', shortLabel: 'All' },
  { key: 'research', label: 'AI / ML Research', shortLabel: 'AI / ML' },
  { key: 'data', label: 'Data Science', shortLabel: 'Data' },
  { key: 'semiconductor', label: 'Semiconductor AI', shortLabel: 'Semiconductor' },
  { key: 'robotics', label: 'Robotics / 3D', shortLabel: 'Robotics' },
];

export const metrics = [
  {
    value: '32%',
    number: 32,
    suffix: '%',
    direction: '↓',
    label: 'Sulcus boundary error',
    context: 'MICCAI 2026',
    views: ['all', 'research'] as ViewKey[],
  },
  {
    value: '90%',
    number: 90,
    suffix: '%',
    direction: '↓',
    label: '3D mesh generation time',
    context: 'KCC 2023',
    views: ['all', 'data', 'robotics'] as ViewKey[],
  },
  {
    value: '99.85%',
    number: 99.85,
    suffix: '%',
    direction: '↓',
    label: 'Teacher model size',
    context: 'ACK 2023',
    views: ['all', 'research', 'data'] as ViewKey[],
  },
  {
    value: '+8.4%',
    number: 8.4,
    prefix: '+',
    suffix: '%',
    direction: '',
    label: 'Spatial ALD throughput',
    context: 'Process optimization lab',
    views: ['semiconductor'] as ViewKey[],
  },
  {
    value: 'CES 2024',
    label: 'Smart-farm AI exhibition',
    context: 'KIST',
    views: ['all', 'research', 'robotics'] as ViewKey[],
  },
];

export const projects: Project[] = [
  {
    slug: 'sulcus-aware-hippocampal-surface',
    title: 'Sulcus-Aware Hippocampal Surface Modeling',
    eyebrow: 'Medical AI · 3D Vision · MICCAI 2026',
    period: '2024–2026',
    organization: 'POSTECH MIP Lab',
    summary:
      'A topology-consistent reconstruction framework that preserves the thin hippocampal sulcus using training-time guidance and template-to-subject deformation.',
    problem:
      'Conventional surface pipelines often erase the hippocampal sulcus through partial-volume effects and smoothing, while flexible deformation methods can introduce self-intersections or invalid topology.',
    difficulty:
      'The target structure is much thinner than the 1 mm structural MRI grid, and high-resolution sulcus labels are expensive and impractical to require at inference time.',
    firstApproach:
      'I compared mask-derived, level-set, deformation-based, and end-to-end mesh reconstruction baselines, then measured not only whole-hippocampus agreement but also sulcus fidelity and geometric failures.',
    decision:
      'Instead of predicting a free-form mesh, I anchored every subject to a sulcus-preserving template and learned a smooth diffeomorphic field, using sulcus labels only as auxiliary training signals.',
    implementation:
      'Built a voxel-level template, warped a fixed-topology mesh with a VoxelMorph-style deformation network, combined volume, surface, sulcus, and field-regularization losses, and validated correspondence after Procrustes alignment.',
    result:
      'Reduced sulcus boundary error from the strongest baseline’s 0.97 mm to 0.66 mm—about 32%—with zero topology mismatches and only one highly localized self-intersection case. The surfaces enabled AD–CN sulcus morphometry.',
    learned:
      'A model is useful only when its representation preserves the feature that matters downstream. I now define evaluation around the scientific decision, not only the global benchmark score.',
    metrics: [
      { value: '32% ↓', label: 'sulcus error' },
      { value: '0', label: 'topology errors' },
      { value: '1st', label: 'author' },
    ],
    tags: ['PyTorch', 'VoxelMorph', 'MRI', 'Diffeomorphic deformation', '3D mesh', 'Morphometry'],
    views: ['all', 'research', 'data'],
    featured: true,
    image: '/images/hippocampus-comparison.png',
    imageAlt:
      'Comparison of hippocampal surface reconstruction methods, including sulcus fidelity and shape statistics.',
    links: [
      { label: 'Code preview', href: 'https://github.com/Shape-Lab/Sulcus-Aware-Hippo-Surface' },
      { label: 'POSTECH research highlight', href: 'https://cse.postech.ac.kr/' },
    ],
  },
  {
    slug: 'parallel-3d-mesh-pipeline',
    title: 'Parallel 3D Point-Cloud Mesh Pipeline',
    eyebrow: '3D Data · Systems · KCC 2023',
    period: '2022–2023',
    organization: 'Dongguk University × VESTELLALAB',
    summary:
      'Reframed a 38-million-point bottleneck as independent object-level work, then parallelized meshing under ordinary workstation memory constraints.',
    problem:
      'Meshing an entire parking-garage point cloud at once caused processing time and memory use to grow beyond what a standard office workstation could handle.',
    difficulty:
      'Simply moving the same workload to stronger hardware would not remove the structural bottleneck, and the scene contained both static infrastructure and moving objects.',
    firstApproach:
      'I compared whole-scene processing, sequential object processing, and parallel object processing while measuring both elapsed time and memory use.',
    decision:
      'I chose DBSCAN-based static-object segmentation so each object could be meshed independently, then reserved learned detection for vehicles that were better represented by reusable models.',
    implementation:
      'Segmented the point cloud with DBSCAN, ran object-wise meshing in parallel, detected cars with SECOND, and integrated the result into a Unity visualization pipeline.',
    result:
      'Cut mesh generation time by about 90%, retained operability in constrained memory, published at KCC 2023, and received 3rd prize in the undergraduate/junior paper competition.',
    learned:
      'Before optimizing an algorithm, I look for a better unit of work. Changing the processing boundary can remove more cost than tuning the original pipeline.',
    metrics: [
      { value: '90% ↓', label: 'mesh time' },
      { value: '38M', label: 'points' },
      { value: '3rd', label: 'paper award' },
    ],
    tags: ['Point cloud', 'DBSCAN', 'Parallel processing', 'SECOND', 'Unity', 'Python'],
    views: ['all', 'data', 'robotics'],
    featured: true,
    image: '/images/mesh-pipeline.png',
    imageAlt: 'Point-cloud comparison before and after DBSCAN-based object segmentation.',
  },
  {
    slug: 'smart-farm-vision-automation',
    title: 'Computer Vision for Smart-Farm Automation',
    eyebrow: 'Computer Vision · Automation · CES 2024',
    period: '2023–2024',
    organization: 'KIST Intelligent Robotics',
    summary:
      'Improved plant-growth measurement models and delivered them as maintainable desktop software for repeated use in an automated farm.',
    problem:
      'Plant stem diameter and branching points were measured manually, creating repetitive work and inconsistent results across images and operators.',
    difficulty:
      'The solution had to improve model quality, produce geometrically meaningful measurements, and remain usable by researchers outside the AI codebase.',
    firstApproach:
      'I evaluated the existing detection and measurement pipeline separately to distinguish model errors from geometry and software-architecture errors.',
    decision:
      'I combined SAM/YOLOR segmentation, EfficientNet point detection, and least-squares diameter fitting, then refactored the desktop application around reusable strategy and singleton patterns.',
    implementation:
      'Trained and evaluated the vision models, corrected tilt during stem measurement, implemented a PyQt5 GUI, and connected the pipeline to the automation workflow.',
    result:
      'Improved stem segmentation by 5%, branch-point detection by 10%, and diameter RMSE by 22.54%. The system was exhibited at CES 2024 and connected to patent and paper preparation.',
    learned:
      'A research metric becomes valuable only after the model, measurement algorithm, and operator workflow agree on the same output.',
    metrics: [
      { value: '+5%', label: 'segmentation' },
      { value: '+10%', label: 'point detection' },
      { value: '22.54% ↓', label: 'diameter RMSE' },
    ],
    tags: ['SAM', 'YOLOR', 'EfficientNet', 'Least squares', 'PyQt5', 'Design patterns'],
    views: ['all', 'research', 'robotics', 'semiconductor'],
    featured: true,
  },
  {
    slug: 'knowledge-distillation-crowd-counting',
    title: 'Knowledge Distillation for Edge Crowd Counting',
    eyebrow: 'Edge AI · Model Compression · ACK 2023',
    period: '2023',
    organization: 'HanIeum ICT Mentoring',
    summary:
      'Selected a compact student architecture and redesigned its loss so crowd counts could be estimated near the camera instead of transmitting full video.',
    problem:
      'A subway congestion service needed useful count accuracy without sending multiple high-bandwidth camera streams to a central server.',
    difficulty:
      'The teacher model was accurate but 366.6 MB, while the 0.532 MB MCNN student was deployable but had substantially higher error.',
    firstApproach:
      'The team reviewed 17 crowd-counting architectures and compared accuracy, output format, parameter count, and edge suitability before choosing the teacher and student.',
    decision:
      'I used M-SFANet as teacher and MCNN as student, combining ground-truth and teacher-output losses and tuning the distillation weight without an unnecessary softmax temperature.',
    implementation:
      'Designed the two-stage training procedure, applied cosine-annealing warm restarts, and compared alpha values with MAE and RMSE on ShanghaiTech Part A.',
    result:
      'Kept the model at 0.543 MB—99.85% smaller than the teacher—while improving MCNN MAE from 110.2 to 90.86, a 17.55% improvement. Published at ACK 2023 and won an ICT mentoring award.',
    learned:
      'Compression is a cost–performance decision. The right model is not the largest one; it is the smallest model that clears the operating requirement.',
    metrics: [
      { value: '99.85% ↓', label: 'model size' },
      { value: '17.55%', label: 'MAE improvement' },
      { value: '0.543 MB', label: 'student model' },
    ],
    tags: ['Knowledge distillation', 'M-SFANet', 'MCNN', 'PyTorch', 'Edge AI'],
    views: ['all', 'research', 'data'],
    featured: true,
  },
  {
    slug: 'semiconductor-process-optimization',
    title: 'Semiconductor Process Optimization Lab',
    eyebrow: 'Manufacturing AI · DOE · Training project',
    period: '2026',
    organization: 'Semicon Bootcamp',
    summary:
      'Used DOE, interpretable ML, and constrained search to examine the trade-off among within-wafer uniformity, throughput, and lot-to-lot variation.',
    problem:
      'Process engineers must improve productivity without allowing uniformity or between-wafer variation to move outside a controllable margin.',
    difficulty:
      'The objective was multi-criteria: faster rotation or larger batches increased throughput, but could degrade WiW or W2W variation.',
    firstApproach:
      'I analyzed correlations and regression behavior, compared linear regression, random forest, and gradient boosting, and checked performance with R², RMSE, and cross-validation.',
    decision:
      'I treated the model as a proposal generator rather than ground truth, used SHAP to inspect influential variables, and required a confirmation experiment before accepting the candidate condition.',
    implementation:
      'Built a Python workflow for DOE data, ML prediction, differential-evolution search, constraint filtering, and natural-language experiment recommendations.',
    result:
      'In the Spatial ALD exercise, the confirmed condition improved throughput by 8.4% while lowering WiW variation from 1.15% to 1.10%. In LPCVD, a 5-to-6-lot change increased UPH 20% but exposed a W2W trade-off (0.96% to 2.86%).',
    learned:
      'Optimization is not choosing the largest predicted gain. It is defining guardrails, exposing trade-offs, and testing the smallest experiment that can disprove the recommendation.',
    metrics: [
      { value: '+8.4%', label: 'ALD throughput' },
      { value: '1.10%', label: 'confirmed WiW' },
      { value: '+20%', label: 'LPCVD UPH' },
    ],
    tags: ['DOE', 'Random Forest', 'Gradient Boosting', 'SHAP', 'Differential Evolution', 'Yield'],
    views: ['all', 'data', 'semiconductor'],
    featured: true,
  },
  {
    slug: 'naver-financial-similarity-search',
    title: 'KNN Similarity Search & Error Analysis',
    eyebrow: 'Data Science · Industry collaboration',
    period: '2025–2026',
    organization: 'NAVER Financial × POSTECH',
    summary:
      'Built a KNN-based similarity and analysis framework, then converted failure cases into parameter and hardware decisions.',
    problem:
      'The project needed a reproducible way to retrieve comparable records and determine the minimum hardware configuration under accuracy, false-positive, and cost constraints.',
    difficulty:
      'A single top-line score hid distinct error modes and did not answer whether a cheaper device would still meet the operating threshold.',
    firstApproach:
      'I inspected nearest-neighbor outputs, categorized false positives and misses, and compared parameter settings against both quality and cost criteria.',
    decision:
      'I separated retrieval quality, error type, and hardware constraint instead of collapsing them into one metric, then used representative failure cases for targeted review.',
    implementation:
      'Developed the KNN retrieval pipeline, evaluation summaries, error-case taxonomy, and parameter-tuning workflow while serving as the lab–company communication point.',
    result:
      'Established an analysis framework that connected similarity quality to minimum hardware conditions and made model changes traceable through classified error cases.',
    learned:
      'A useful data-science result must make the next decision easier. Error structure often provides more leverage than another aggregate score.',
    metrics: [
      { value: 'KNN', label: 'retrieval framework' },
      { value: '3-way', label: 'quality · FPR · cost' },
    ],
    tags: ['KNN', 'Error analysis', 'Parameter tuning', 'Hardware constraints', 'Collaboration'],
    views: ['all', 'data', 'semiconductor'],
    featured: false,
  },
  {
    slug: 'railway-lidar-inspection-robot',
    title: 'LiDAR Railway Inspection Robot',
    eyebrow: 'Robotics · LiDAR · Commercialized',
    period: '2021–2023',
    organization: 'Dongguk ATRC × KORAIL',
    summary:
      'Developed ROS2 LiDAR algorithms for detecting obstacles, missing ballast, subsidence, and flooding on an autonomous railway inspection robot.',
    problem:
      'Rail inspection required repeatable detection of several infrastructure hazards from a moving robot under real sensor and operating constraints.',
    difficulty:
      'The system had to coordinate sensor acquisition, spatial rules, robot middleware, and field-specific thresholds rather than stop at an offline model demo.',
    firstApproach:
      'I traced the complete LiDAR data path and validated each hazard detector against the physical definition of the railway defect.',
    decision:
      'I used explicit geometric and point-cloud processing where it was interpretable and reliable, integrating the algorithms through ROS2 instead of forcing every case into a learned model.',
    implementation:
      'Implemented C++/Python LiDAR processing nodes in ROS2 Foxy and debugged a separate Virtual LiDAR packet-structure issue in Unity C# for an ADD collaboration.',
    result:
      'The inspection algorithms were integrated into the robot, exhibited at LITT, and connected to commercialization.',
    learned:
      'Robotics rewards end-to-end accountability: an accurate algorithm still fails if timestamps, packets, frames, or operating assumptions are wrong.',
    metrics: [
      { value: '4', label: 'hazard types' },
      { value: 'ROS2', label: 'platform integration' },
      { value: 'Field', label: 'commercialized' },
    ],
    tags: ['ROS2', 'LiDAR', 'C++', 'Point cloud', 'Unity C#', 'Field robotics'],
    views: ['all', 'robotics', 'semiconductor'],
    featured: true,
  },
  {
    slug: 'scalp-image-analysis',
    title: 'Deep Learning–Based Scalp Image Analysis',
    eyebrow: 'Computer Vision · Limited Data · Electronics',
    period: '2022–2023',
    organization: 'Dongguk University × NeuroCircuit',
    summary:
      'Reduced spurious skin-tone and lighting variation before ensemble classification of four alopecia-severity levels.',
    problem:
      'A limited microscope-image dataset contained large color shifts from lighting and skin tone that could dominate the medically relevant pattern.',
    difficulty:
      'Collecting a much larger balanced dataset was not immediately possible, so the preprocessing had to improve invariance without erasing scalp features.',
    firstApproach:
      'I grouped representative red, yellow, peach, green, and blue cases and inspected where simple tone normalization failed.',
    decision:
      'I normalized color against a reference, added controlled red-channel augmentation for failure cases, and evaluated complementary CNN backbones.',
    implementation:
      'Built color normalization and PCA augmentation code, then ensembled DenseNet, Xception, and ResNet predictions.',
    result:
      'Improved F1 by about 12 percentage points and achieved 95.84% accuracy. The work was published in Electronics and selected as an Editor’s Choice article.',
    learned:
      'When data are scarce, carefully defined nuisance variation and targeted preprocessing can be more effective than blindly increasing model capacity.',
    metrics: [
      { value: '+12%p', label: 'F1' },
      { value: '95.84%', label: 'accuracy' },
    ],
    tags: ['DenseNet', 'Xception', 'ResNet', 'Color normalization', 'Augmentation'],
    views: ['all', 'research', 'data'],
    featured: false,
    links: [
      { label: 'Paper', href: 'https://doi.org/10.3390/electronics12061380' },
      { label: 'Code', href: 'https://github.com/Yuyeon-Kim/ScalpAnalysis' },
    ],
  },
  {
    slug: 'psychosis-hippocampal-shape',
    title: 'Hippocampal Shape Across Psychosis Risk States',
    eyebrow: 'Neuroimaging · Surface Statistics · Co-first author',
    period: '2024–2026',
    organization: 'POSTECH × Seoul National University Hospital',
    summary:
      'Compared volumetric and vertex-wise hippocampal changes across familial risk, clinical risk, first-episode psychosis, and healthy controls.',
    problem:
      'Scalar volume can average away localized inward and outward surface changes, making stage-specific patterns difficult to distinguish.',
    difficulty:
      'The cohorts differed in demographic and clinical covariates, while surface statistics required reliable correspondence and multiple-comparison control.',
    firstApproach:
      'I aligned subject surfaces, checked volume effects, and compared magnitude and directional coherence of vertex-wise deformation.',
    decision:
      'We separated genetic risk, symptomatic clinical risk, and illness onset rather than treating them as a single continuum.',
    implementation:
      'Contributed surface registration, MANCOVA/ANCOVA, covariate adjustment, multiple-comparison correction, and cluster-level surface interpretation for 360 participants.',
    result:
      'Identified concentrated CA1 inward deformation at illness onset and distinct posterior configurations in clinical- and genetic-risk groups that volume alone did not detect.',
    learned:
      'The representation determines the clinical question a dataset can answer. Local geometry can reveal patterns that disappear in global summaries.',
    metrics: [
      { value: '360', label: 'participants' },
      { value: '4', label: 'risk states' },
      { value: 'Co-1st', label: 'authorship' },
    ],
    tags: ['Surface morphometry', 'MRI', 'MANCOVA', 'ANCOVA', 'SurfStat', 'Procrustes'],
    views: ['all', 'research', 'data'],
    featured: false,
  },
  {
    slug: 'maternal-depression-brain-similarity',
    title: 'Maternal Depression & Brain Similarity',
    eyebrow: 'Neuroimaging · Intergenerational analysis',
    period: '2024–2026',
    organization: 'POSTECH × Korea Brain Research Institute',
    summary:
      'Studied how maternal depression and parenting stress relate to maternal brain measures, mother–child similarity, and the developing brain.',
    problem:
      'The transmission pathway spans maternal symptoms, parenting stress, functional and structural similarity, and child outcomes.',
    difficulty:
      'The analysis combined resting-state activation, nine morphological features, multiple outcomes, and mediation-like structural relationships.',
    firstApproach:
      'The team organized effects at three levels: parenting brain, mother–child similarity, and child brain development.',
    decision:
      'We modeled the chain of associations rather than reporting disconnected pairwise correlations.',
    implementation:
      'Contributed imaging-feature analysis and statistical validation across 119 mother–child dyads with completed neuroimaging.',
    result:
      'The study linked maternal depression and parenting stress to brain similarity and child-depression-related measures, highlighting regions involved in empathy processing.',
    learned:
      'Complex collaboration works best when each statistical result is traceable to a clearly defined biological and behavioral question.',
    metrics: [
      { value: '119', label: 'dyads' },
      { value: '9', label: 'shape features' },
    ],
    tags: ['MRI', 'Brain similarity', 'Statistical modeling', 'MATLAB', 'Interdisciplinary research'],
    views: ['all', 'research', 'data'],
    featured: false,
  },
  {
    slug: 'brain-tumor-deformation-analysis',
    title: 'Deformation-Based Brain Tumor Analysis',
    eyebrow: 'Medical Imaging · Exploratory research',
    period: '2024',
    organization: 'POSTECH × Seoul St. Mary’s Hospital',
    summary:
      'Explored whether unsupervised deformation fields could expose tumor-induced structural change and support detection.',
    problem:
      'Tumors distort nearby anatomy, but direct labels are costly and the deformation itself may contain useful weak supervision.',
    difficulty:
      'A deformation field can reflect registration behavior as well as pathology, so visual expansion alone is not sufficient evidence.',
    firstApproach:
      'I trained a VoxelMorph-based unsupervised registration model and inspected how tumor regions changed under learned deformation.',
    decision:
      'I treated the observation as a feasibility signal and documented the validation required before turning it into a detection claim.',
    implementation:
      'Prepared the imaging pipeline, trained the deformation model, and discussed clinically meaningful evaluation with medical collaborators.',
    result:
      'Observed automatic expansion around tumor regions and established a concrete direction for evaluating deformation-derived tumor cues.',
    learned:
      'An interesting model behavior is a hypothesis, not a result, until the evaluation isolates it from alternative explanations.',
    metrics: [
      { value: 'VoxelMorph', label: 'unsupervised model' },
      { value: 'Clinical', label: 'validation design' },
    ],
    tags: ['VoxelMorph', 'MRI', 'Unsupervised learning', 'Clinical collaboration'],
    views: ['all', 'research'],
    featured: false,
    links: [{ label: 'Related code', href: 'https://github.com/Yuyeon-Kim/brain-tumor-segmentation' }],
  },
  {
    slug: 'electric-kickboard-braking',
    title: 'Automatic Braking for Electric Kickboards',
    eyebrow: 'Embedded Vision · Safety',
    period: '2022',
    organization: 'Undergraduate project',
    summary:
      'Built a VGG16-based braking classifier and deployed the pipeline on NVIDIA Jetson Xavier NX hardware.',
    problem:
      'A compact mobility device needed to recognize braking situations with enough accuracy and latency for an embedded prototype.',
    difficulty:
      'The design had to connect image classification, decision logic, and mountable hardware rather than stop at offline accuracy.',
    firstApproach:
      'I established the scenario labels and evaluated a transfer-learning baseline before hardware integration.',
    decision:
      'I selected a proven CNN backbone and focused the remaining effort on reliable embedded execution and system integration.',
    implementation:
      'Fine-tuned VGG16, implemented braking logic, and packaged the prototype on Xavier NX.',
    result:
      'Achieved 98% classification accuracy and built a hardware-mountable prototype.',
    learned:
      'Safety-oriented prototypes need clear operating boundaries and system tests beyond a single validation score.',
    metrics: [
      { value: '98%', label: 'accuracy' },
      { value: 'Xavier NX', label: 'edge deployment' },
    ],
    tags: ['VGG16', 'Jetson Xavier NX', 'Embedded AI', 'Computer Vision'],
    views: ['all', 'research', 'robotics'],
    featured: false,
  },
];

export const publications = [
  {
    year: '2026',
    title: 'Sulcus-Aware Hippocampal Surface Modeling with Training-time Sulcus-guided Learning',
    venue: 'MICCAI 2026',
    role: 'First author',
    status: 'Accepted',
    tags: ['Medical imaging', 'Surface reconstruction', 'Deformation'],
    href: 'https://github.com/Shape-Lab/Sulcus-Aware-Hippo-Surface',
  },
  {
    year: '2026',
    title: 'Surface-Based Hippocampal Morphometry Reveals Distinct Deformation Signatures Across Psychosis Risk States and Illness Onset',
    venue: 'SNUH collaboration',
    role: 'Co-first author',
    status: 'Manuscript',
    tags: ['Psychosis', 'Shape analysis', 'Statistics'],
  },
  {
    year: '2026',
    title: 'Depression and Parenting Stress Affect Parenting Brain, Developing Brain, and Their Similarity',
    venue: 'Korea Brain Research Institute collaboration',
    role: 'Co-author',
    status: 'Manuscript',
    tags: ['Brain similarity', 'Intergenerational imaging'],
  },
  {
    year: '2023',
    title: 'Deep-Learning-Based Scalp Image Analysis Using Limited Data',
    venue: 'Electronics 12(6), 1380',
    role: 'Co-author',
    status: 'Published · Editor’s Choice',
    tags: ['Computer vision', 'Limited data'],
    href: 'https://doi.org/10.3390/electronics12061380',
  },
  {
    year: '2023',
    title: 'Research on Knowledge Distillation Applied to Lightweight Crowd Counting',
    venue: 'ACK 2023',
    role: 'Joint first author',
    status: 'Published',
    tags: ['Knowledge distillation', 'Edge AI'],
  },
  {
    year: '2023',
    title: 'A Study of Object-Specific Parallel Processing Methods and Segmentation Using DBSCAN for Efficient 3D Mesh Generation',
    venue: 'KCC 2023',
    role: 'Joint first author',
    status: 'Published · 3rd prize',
    tags: ['Point cloud', 'Parallel processing'],
  },
];

export const experiences = [
  {
    period: '2024.04–2026.08',
    organization: 'POSTECH Medical Information Processing Lab',
    role: 'Graduate Researcher · Lab Manager · Teaching Assistant',
    type: 'Research',
    views: ['all', 'research', 'data'] as ViewKey[],
    highlights: [
      'First-authored MICCAI 2026 work on topology-consistent hippocampal reconstruction.',
      'Collaborated with SNUH, KBRI, Seoul St. Mary’s Hospital, and NAVER Financial.',
      'Coordinated lab operations and automated recurring notices with a Slack bot.',
    ],
  },
  {
    period: '2025.08–2026.04',
    organization: 'NAVER Financial × POSTECH',
    role: 'Industry Collaboration Researcher',
    type: 'Industry research',
    views: ['all', 'data'] as ViewKey[],
    highlights: ['Developed KNN similarity-search and error-analysis framework under quality, false-positive, and cost constraints.'],
  },
  {
    period: '2023.09–2024.04',
    organization: 'KIST Intelligent Robotics',
    role: 'Undergraduate Researcher',
    type: 'Research',
    views: ['all', 'research', 'robotics', 'semiconductor'] as ViewKey[],
    highlights: ['Improved smart-farm vision models and delivered a PyQt5 measurement system exhibited at CES 2024.'],
  },
  {
    period: '2021.10–2023.08',
    organization: 'Dongguk University ATRC',
    role: 'Undergraduate Researcher',
    type: 'Robotics',
    views: ['all', 'robotics', 'semiconductor'] as ViewKey[],
    highlights: ['Built ROS2/LiDAR railway inspection algorithms with KORAIL and debugged Virtual LiDAR packet code for an ADD project.'],
  },
  {
    period: '2021.03–2021.10',
    organization: 'Highconsi · SidaeInjae',
    role: 'Educational Content Operations',
    type: 'Part-time',
    views: ['all', 'data'] as ViewKey[],
    highlights: ['Updated multi-subject workbook formats, coordinated task allocation, and standardized repeatable document production.'],
  },
  {
    period: '2021.01–2021.02',
    organization: 'Mobiltech',
    role: '3D Point-Cloud Labeling Lead',
    type: 'Part-time',
    views: ['all', 'data', 'robotics'] as ViewKey[],
    highlights: ['Cleaned moving objects, reviewed peer output, provided feedback, and consolidated 3D labeling deliverables.'],
  },
  {
    period: '2020–2021',
    organization: 'Tutoring · SelectStar · O2Line · GS25',
    role: 'Teaching, Data Labeling, Content Review, Customer Service',
    type: 'Career archive',
    views: ['all'] as ViewKey[],
    highlights: ['Built early experience in accuracy, customer communication, task ownership, and repeatable work.'],
  },
];

export const education = [
  {
    period: '2024.09–2026.08',
    institution: 'POSTECH',
    degree: 'M.S., Graduate School of Artificial Intelligence',
    detail: 'GPA 4.0/4.3 · Top 3% · Medical imaging, computer vision, statistical analysis',
  },
  {
    period: '2020.03–2024.02',
    institution: 'Dongguk University',
    degree: 'B.S., Computer Science and Engineering',
    detail: 'GPA 4.28/4.5 · Summa Cum Laude · 2nd of 64',
  },
];

export const semiconductorEducation = [
  {
    period: '2026.09–Present',
    title: 'AI Semiconductor Process & Equipment Control Software',
    provider: 'SeSAC Seongdong',
    detail: 'Process, equipment control, data analysis, and manufacturing software intensive program.',
  },
  {
    period: '2026.07–2026.08',
    title: 'Data-Driven Semiconductor Yield Management & Optimization',
    provider: 'Comento',
    detail: 'Yield, test, recipe tuning, FEM, split/cliff evaluation, correlation, and regression.',
  },
  {
    period: '2026.08',
    title: 'Machine Learning for Semiconductor Process Improvement',
    provider: 'Semicon Bootcamp',
    detail: 'Spatial ALD, silicon LPCVD, DOE, SHAP, constrained optimization, and AI-agent experiment recommendation.',
  },
];

export const awards = [
  { year: '2024', title: 'Summa Cum Laude', issuer: 'Dongguk University' },
  { year: '2023', title: '3rd Prize, Undergraduate/Junior Paper Competition', issuer: 'KCC' },
  { year: '2023', title: 'Encouragement Award', issuer: 'ICT Mentoring Competition' },
  { year: '2021', title: '3rd Prize', issuer: 'Farm Competition' },
  { year: '2020', title: '2nd Prize', issuer: 'Creative Idea Contest' },
];

export const certifications = [
  { year: '2026', title: 'AICE Associate', issuer: 'KT / 한국경제신문' },
  { year: '2026', title: 'ADsP', issuer: 'Korea Data Agency' },
  { year: '2026', title: 'OPIc IH', issuer: 'ACTFL' },
  { year: '2026', title: 'Six Sigma White Belt', issuer: 'CSSC' },
  { year: '2026', title: 'Kaggle Intro to SQL', issuer: 'Kaggle' },
  { year: '2021', title: 'IPAT Level 5', issuer: 'Korea Invention Promotion Association' },
];

export const skillGroups = [
  {
    title: 'AI / ML',
    items: [
      { name: 'PyTorch', evidence: 'MICCAI · Scalp · Crowd Counting' },
      { name: 'Scikit-learn', evidence: 'DBSCAN · KNN · Semiconductor ML' },
      { name: 'TensorFlow / Keras', evidence: 'Vision classification projects' },
    ],
  },
  {
    title: 'Computer Vision',
    items: [
      { name: '3D / Medical', evidence: 'VoxelMorph · Surface reconstruction · MRI' },
      { name: 'Detection / Segmentation', evidence: 'SAM · YOLOR · EfficientNet · ResNet' },
      { name: 'Point Cloud', evidence: 'LiDAR · DBSCAN · SECOND · Mesh' },
    ],
  },
  {
    title: 'Data / Statistics',
    items: [
      { name: 'Python', evidence: 'NumPy · Pandas · SciPy · statsmodels' },
      { name: 'Statistical analysis', evidence: 'MANCOVA · ANCOVA · multiple comparison' },
      { name: 'Process analytics', evidence: 'DOE · SHAP · regression · yield' },
    ],
  },
  {
    title: 'Engineering',
    items: [
      { name: 'Robotics', evidence: 'ROS1 · ROS2 · LiDAR · Unity C#' },
      { name: 'Development', evidence: 'C/C++ · C# · Java · Linux · Git' },
      { name: 'Delivery', evidence: 'PyQt5 · refactoring · field integration' },
    ],
  },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
