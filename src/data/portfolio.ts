export type ViewKey =
  "all" | "research" | "data" | "semiconductor" | "robotics";

export type LinkItem = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  period: string;
  startDate: string;
  endDate: string;
  organization: string;
  summary: string;
  contribution: string;
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
  name: "Yuyeon Kim",
  koreanName: "김유연",
  role: "AI Researcher · ML Engineer",
  tagline: "I turn complex data into measurable improvements.",
  summary:
    "I build AI systems that connect research quality with real-world constraints—from topology-consistent medical surfaces to LiDAR robotics and semiconductor process optimization.",
  location: "Seoul, South Korea",
  github: "https://github.com/Yuyeon-Kim",
};

export const views: { key: ViewKey; label: string; shortLabel: string }[] = [
  { key: "all", label: "All experience", shortLabel: "All" },
  { key: "research", label: "AI / ML Research", shortLabel: "AI / ML" },
  { key: "data", label: "Data Science", shortLabel: "Data" },
  {
    key: "semiconductor",
    label: "Semiconductor AI",
    shortLabel: "Semiconductor",
  },
  { key: "robotics", label: "Robotics / 3D", shortLabel: "Robotics" },
];

export const metrics = [
  {
    value: "32%",
    number: 32,
    suffix: "%",
    direction: "↓",
    label: "Sulcus boundary error",
    context: "MICCAI 2026",
    views: ["all", "research"] as ViewKey[],
  },
  {
    value: "90%",
    number: 90,
    suffix: "%",
    direction: "↓",
    label: "3D mesh generation time",
    context: "KCC 2023",
    views: ["all", "data", "robotics"] as ViewKey[],
  },
  {
    value: "99.85%",
    number: 99.85,
    suffix: "%",
    direction: "↓",
    label: "Teacher model size",
    context: "ACK 2023",
    views: ["all", "research", "data"] as ViewKey[],
  },
  {
    value: "+8.4%",
    number: 8.4,
    prefix: "+",
    suffix: "%",
    direction: "",
    label: "Spatial ALD throughput",
    context: "Process optimization lab",
    views: ["semiconductor"] as ViewKey[],
  },
  {
    value: "CES 2024",
    label: "Smart-farm AI exhibition",
    context: "KIST",
    views: ["all", "research", "robotics"] as ViewKey[],
  },
];

export const projects: Project[] = [
  {
    slug: "sulcus-aware-hippocampal-surface",
    title: "Sulcus-Aware Hippocampal Surface Modeling",
    eyebrow: "Medical AI · 3D Vision · MICCAI 2026",
    period: "2024.04–2026.08",
    startDate: "2024-04-01",
    endDate: "2026-08-31",
    organization: "POSTECH MIP Lab",
    summary:
      "Developed a topology-consistent 3D hippocampal reconstruction method that preserves the thin sulcus while maintaining vertex-wise correspondence across subjects.",
    contribution:
      "Lead author. Designed the sulcus-aware deformation framework, built the training and evaluation pipeline, performed baseline and morphometric analyses, and led manuscript and figure preparation.",
    problem:
      "The hippocampal sulcus is thinner than the 1 mm MRI grid and is easily erased by partial-volume effects and surface smoothing. Preserving it too aggressively, however, can introduce self-intersections or invalid topology.",
    difficulty:
      "High-resolution sulcus labels are expensive to produce, so a method that also requires them at inference would be difficult to scale to routine research data.",
    firstApproach:
      "Compared mask-derived surfaces, level-set methods, deformation-based reconstruction, and end-to-end mesh prediction, evaluating sulcus fidelity and geometric failures in addition to whole-hippocampus agreement.",
    decision:
      "Rather than predicting each mesh freely, built a sulcus-preserving fixed-topology template and learned a diffeomorphic deformation to each subject. Sulcus labels were used only as auxiliary supervision during training.",
    implementation:
      "Constructed a voxel-level template and fixed-topology mesh, trained a VoxelMorph-style deformation network, combined volume, surface, sulcus, and field-regularization losses, and verified correspondence after Procrustes alignment.",
    result:
      "Reduced sulcus boundary error from the strongest baseline’s 0.97 mm to 0.66 mm—about 32%—with zero topology errors and only one highly localized self-intersection. The resulting surfaces enabled sulcus-adjacent morphometry in cognitively normal and Alzheimer’s disease cohorts. The work was accepted to MICCAI 2026 as a first-author paper.",
    learned:
      "Evaluation should be designed around the anatomical feature required by the downstream clinical analysis, not only a global surface score.",
    metrics: [
      { value: "32% ↓", label: "sulcus error" },
      { value: "0", label: "topology errors" },
      { value: "1st", label: "author" },
    ],
    tags: [
      "PyTorch",
      "VoxelMorph",
      "MRI",
      "Diffeomorphic deformation",
      "3D mesh",
      "Morphometry",
    ],
    views: ["all", "research", "data"],
    featured: true,
    image: "/images/hippocampus-comparison.png",
    imageAlt:
      "Comparison of hippocampal surface reconstruction methods, including sulcus fidelity and shape statistics.",
    links: [
      {
        label: "Code preview",
        href: "https://github.com/Shape-Lab/Sulcus-Aware-Hippo-Surface",
      },
      {
        label: "POSTECH research highlight",
        href: "https://cse.postech.ac.kr/s.do?QwcRFOcVGw",
      },
    ],
  },
  {
    slug: "parallel-3d-mesh-pipeline",
    title: "Parallel 3D Point-Cloud Mesh Pipeline",
    eyebrow: "3D Data · Systems · KCC 2023",
    period: "2022.09–2023.06",
    startDate: "2022-09-01",
    endDate: "2023-06-20",
    organization: "Dongguk University × VESTELLALAB",
    summary:
      "Segmented a 38-million-point indoor parking-garage scan into object-level jobs and parallelized meshing, reducing generation time by about 90%.",
    contribution:
      "Project lead and co-first author. Designed the object-wise processing pipeline, implemented parallel meshing and thread benchmarks, applied SECOND vehicle detection, and integrated Unity visualization.",
    problem:
      "Meshing the entire point cloud at once caused processing time and memory use to grow beyond what a standard office workstation could handle.",
    difficulty:
      "Stronger hardware would not remove the structural bottleneck, and static infrastructure and vehicles required different processing strategies.",
    firstApproach:
      "Compared whole-scene processing, sequential object processing, and parallel object processing while measuring elapsed time, memory use, and performance by thread count.",
    decision:
      "Used DBSCAN to separate static objects into independent meshing jobs, while handling vehicles with SECOND-based 3D detection so reusable objects did not need to be remeshed.",
    implementation:
      "Implemented DBSCAN clustering, point interpolation, object-wise parallel meshing, thread benchmarks, SECOND vehicle detection, and integration with a Unity visualization pipeline.",
    result:
      "Reduced mesh generation time by about 90% and kept the pipeline operable under limited memory. The work was published at KCC 2023 as a co-first-author paper and received 3rd prize in the undergraduate/junior paper competition.",
    learned:
      "Redefining the unit of work can remove more cost than fine-tuning an algorithm inside the original processing structure.",
    metrics: [
      { value: "90% ↓", label: "mesh time" },
      { value: "38M", label: "points" },
      { value: "3rd", label: "paper award" },
    ],
    tags: [
      "Point cloud",
      "DBSCAN",
      "Parallel processing",
      "SECOND",
      "Unity",
      "Python",
    ],
    views: ["all", "data", "robotics"],
    featured: true,
    image: "/images/mesh-pipeline.png",
    imageAlt:
      "Point-cloud comparison before and after DBSCAN-based object segmentation.",
    links: [
      {
        label: "Paper",
        href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11488590",
      },
    ],
  },
  {
    slug: "smart-farm-vision-automation",
    title: "Computer Vision for Smart-Farm Automation",
    eyebrow: "Computer Vision · Automation · CES 2024",
    period: "2023.09–2024.03",
    startDate: "2023-09-01",
    endDate: "2024-03-31",
    organization: "KIST Intelligent Robotics",
    summary:
      "Improved a computer-vision pipeline that detects plant stems and branch points, measures stem diameter, and delivers the results through a field-ready GUI.",
    contribution:
      "Improved SAM/YOLOR segmentation and EfficientNet keypoint detection, redesigned stem-diameter measurement, and refactored the PyQt5 application for repeated research use.",
    problem:
      "Researchers repeatedly measured stem diameter and branch points by hand, creating time-consuming work and inconsistent results across images and operators.",
    difficulty:
      "The project had to improve model accuracy, correct geometric measurement error from tilted stems, and remain maintainable for researchers outside the AI codebase.",
    firstApproach:
      "Separated the existing workflow into detection, geometric measurement, and GUI layers to identify whether each error came from the model, the measurement rule, or the software structure.",
    decision:
      "Combined SAM/YOLOR stem segmentation, EfficientNet branch-point detection, and least-squares diameter fitting, then reorganized the application with Strategy and Singleton patterns.",
    implementation:
      "Trained and evaluated the vision models, implemented tilt-aware stem-diameter measurement, developed and refactored the PyQt5 GUI, and connected the pipeline to the farm automation workflow.",
    result:
      "Improved stem segmentation by about 5%, branch-point detection by about 10%, and diameter-measurement RMSE by 22.54%. The system was exhibited at CES 2024 and supported patent and paper preparation.",
    learned:
      "A field AI system becomes useful only when the model, measurement algorithm, and operator interface produce and interpret the same output consistently.",
    metrics: [
      { value: "+5%", label: "segmentation" },
      { value: "+10%", label: "point detection" },
      { value: "22.54% ↓", label: "diameter RMSE" },
    ],
    tags: [
      "SAM",
      "YOLOR",
      "EfficientNet",
      "Least squares",
      "PyQt5",
      "Design patterns",
    ],
    views: ["all", "research", "robotics", "semiconductor"],
    featured: true,
    image: "/images/projects/smart-farm-vision.jpg",
    imageAlt:
      "Smart-farm greenhouse imagery with detected plant branch points and measured stem diameters.",
  },
  {
    slug: "knowledge-distillation-crowd-counting",
    title: "Knowledge Distillation for Edge Crowd Counting",
    eyebrow: "Edge AI · Model Compression · ACK 2023",
    period: "2023.04–2023.12",
    startDate: "2023-04-01",
    endDate: "2023-12-07",
    organization: "HanIeum ICT Mentoring",
    summary:
      "Compressed a crowd-counting model so subway congestion could be estimated on an edge device instead of transmitting multiple full video streams to a central server.",
    contribution:
      "Co-first author and presenter. Selected the teacher–student pair, designed the distillation loss and training schedule, ran alpha experiments, and helped build the demonstration software.",
    problem:
      "Streaming several camera feeds would create substantial network cost, but the accurate crowd-counting model was too large to run efficiently at the edge.",
    difficulty:
      "The 366.6 MB teacher was accurate, while the deployable 0.532 MB MCNN student had a much higher MAE of 110.2.",
    firstApproach:
      "Reviewed 17 crowd-counting architectures and compared accuracy, output representation, parameter count, and suitability for an embedded deployment.",
    decision:
      "Selected M-SFANet as teacher and MCNN as student, combining ground-truth and distillation losses. Because the task regressed density maps, the training omitted an unnecessary softmax temperature.",
    implementation:
      "Built a two-stage training pipeline, applied cosine-annealing warm restarts, and compared distillation weights using MAE and RMSE on ShanghaiTech Part A.",
    result:
      "Kept the student at 0.543 MB—99.85% smaller than the teacher—while reducing MCNN MAE from 110.2 to 90.86, a 17.55% improvement. The work was presented at ACK 2023 as a co-first-author paper and received an ICT Mentoring encouragement award.",
    learned:
      "Model compression is a cost–performance decision: the target is the smallest model that still satisfies the operating requirement.",
    metrics: [
      { value: "99.85% ↓", label: "model size" },
      { value: "17.55%", label: "MAE improvement" },
      { value: "0.543 MB", label: "student model" },
    ],
    tags: ["Knowledge distillation", "M-SFANet", "MCNN", "PyTorch", "Edge AI"],
    views: ["all", "research", "data"],
    featured: true,
    image: "/images/projects/crowd-counting-prototype.jpg",
    imageAlt:
      "Subway-station miniature used to demonstrate an edge crowd-counting and congestion-notification service.",
    links: [
      {
        label: "Paper",
        href: "https://doi.org/10.3745/PKIPS.y2023m11a.918",
      },
    ],
  },
  {
    slug: "semiconductor-process-optimization",
    title: "Semiconductor Process Optimization Lab",
    eyebrow: "Manufacturing AI · DOE · Training project",
    period: "2026.08.18–2026.08.26",
    startDate: "2026-08-18",
    endDate: "2026-08-26",
    organization: "Semicon Bootcamp",
    summary:
      "Used DOE, machine learning, SHAP, and constrained search to analyze the trade-off between deposition-process variation and throughput.",
    contribution:
      "Analyzed the DOE datasets, compared ML models, interpreted SHAP results, searched constrained operating conditions, and evaluated confirmation experiments.",
    problem:
      "The process condition had to raise productivity without pushing within-wafer or wafer-to-wafer variation outside an acceptable range.",
    difficulty:
      "Higher rotation speed or batch size could improve throughput while worsening WiW or W2W variation, so no single metric could define the best setting.",
    firstApproach:
      "Analyzed correlations in the DOE data, compared Linear Regression, Random Forest, and Gradient Boosting, and evaluated R², RMSE, and cross-validation performance.",
    decision:
      "Used the model to generate candidate conditions rather than treating predictions as ground truth, inspected influential variables with SHAP, and accepted a condition only after a confirmation experiment.",
    implementation:
      "Built a Python workflow for data analysis, model training, SHAP interpretation, differential-evolution search, constraint filtering, and experiment recommendation.",
    result:
      "In the Spatial ALD exercise, raised UPH from 28.12 to 30.47—an 8.4% increase—while the confirmation experiment reduced WiW variation from 1.15% to 1.10%. In LPCVD, changing from five to six lots increased UPH by 20% but exposed a W2W trade-off from 0.96% to 2.86%.",
    learned:
      "Process optimization is not selecting the largest predicted gain; it requires defining quality guardrails first and validating the recommendation with the smallest useful experiment.",
    metrics: [
      { value: "+8.4%", label: "ALD throughput" },
      { value: "1.10%", label: "confirmed WiW" },
      { value: "+20%", label: "LPCVD UPH" },
    ],
    tags: [
      "DOE",
      "Random Forest",
      "Gradient Boosting",
      "SHAP",
      "Differential Evolution",
      "Yield",
    ],
    views: ["all", "data", "semiconductor"],
    featured: true,
    image: "/images/projects/semiconductor-process-optimization.svg",
    imageAlt:
      "Semiconductor process optimization summary showing ALD and LPCVD productivity and uniformity trade-offs.",
  },
  {
    slug: "industry-similarity-search",
    title: "KNN Similarity Search & Error Analysis",
    eyebrow: "Data Science · Confidential industry project",
    period: "2025.08–2026.04",
    startDate: "2025-08-01",
    endDate: "2026-04-30",
    organization: "Industry Partner × POSTECH",
    summary:
      "Developed a KNN-based framework that retrieves comparable records and connects similarity results to structured success and failure analysis.",
    contribution:
      "Developed the KNN similarity-search pipeline, organized failure cases, tuned parameters, and documented results for cross-team review.",
    problem:
      "An aggregate score could not explain why individual candidates succeeded or failed, so comparable-case retrieval had to be linked with error analysis.",
    difficulty:
      "Neighbor quality changed with feature and parameter choices, while distinct failure modes could disappear inside a single top-line metric.",
    firstApproach:
      "Reviewed nearest-neighbor outputs, grouped recurring failure cases, and compared parameter settings under a consistent evaluation protocol.",
    decision:
      "Kept retrieval quality and error type as separate signals, then reviewed representative failures alongside the similarity results.",
    implementation:
      "Built the KNN retrieval pipeline, evaluation summaries, error taxonomy, and parameter-tuning workflow, documenting each change for traceable cross-team review.",
    result:
      "Established a repeatable framework for connecting similarity quality to classified error cases and reviewing the effect of parameter changes.",
    learned:
      "The value of an analysis is not only a higher score; it is whether the result makes the next experiment and decision clearer.",
    metrics: [
      { value: "KNN", label: "retrieval framework" },
      { value: "3-step", label: "retrieve · review · tune" },
    ],
    tags: [
      "KNN",
      "Error analysis",
      "Parameter tuning",
      "Evaluation design",
      "Collaboration",
    ],
    views: ["all", "data", "semiconductor"],
    featured: false,
    image: "/images/projects/knn-similarity-analysis.svg",
    imageAlt:
      "Confidentiality-safe conceptual diagram of a KNN retrieval, error-analysis, and parameter-tuning workflow.",
  },
  {
    slug: "railway-lidar-inspection-robot",
    title: "LiDAR Railway Inspection Robot",
    eyebrow: "Robotics · LiDAR · Commercialized",
    period: "2021.10–2023.08",
    startDate: "2021-10-12",
    endDate: "2023-08-31",
    organization: "Dongguk ATRC × KORAIL",
    summary:
      "Developed LiDAR algorithms for detecting obstacles, missing ballast, ground subsidence, and flooding on an autonomous railway inspection robot.",
    contribution:
      "Developed four LiDAR anomaly-detection modules in C++/Python and integrated them into a ROS2-based railway inspection robot; also fixed a Virtual LiDAR packet bug in Unity C#.",
    problem:
      "A moving robot had to identify several physically different railway hazards repeatedly and reliably from real LiDAR data.",
    difficulty:
      "Success depended not only on offline detection but also on packet reception, coordinate frames, ROS communication, sensor delay, and field-specific thresholds.",
    firstApproach:
      "Traced the full data path from LiDAR packet reception to ROS node output and validated each detector against the physical definition of its target hazard.",
    decision:
      "Used interpretable geometric point-cloud processing for safety-critical conditions and connected each capability as an independent ROS2 node.",
    implementation:
      "Implemented obstacle, missing-ballast, subsidence, and flooding detection in C++ and Python on ROS2 Foxy. In a separate defense collaboration, also corrected a Virtual LiDAR packet-structure bug in Unity C#.",
    result:
      "The detection modules were integrated into the inspection robot, exhibited at LITT 2024, and connected to commercialization.",
    learned:
      "In robotics, algorithm accuracy is inseparable from packet structure, timing, coordinate frames, and the assumptions of the operating environment.",
    metrics: [
      { value: "4", label: "hazard types" },
      { value: "ROS2", label: "platform integration" },
      { value: "Field", label: "commercialized" },
    ],
    tags: ["ROS2", "LiDAR", "C++", "Point cloud", "Unity C#", "Field robotics"],
    views: ["all", "robotics", "semiconductor"],
    featured: true,
    image: "/images/projects/railway-lidar.png",
    imageAlt:
      "Railway LiDAR point cloud and rail cross-section views used for infrastructure inspection.",
  },
  {
    slug: "scalp-image-analysis",
    title: "Deep Learning–Based Scalp Image Analysis",
    eyebrow: "Computer Vision · Limited Data · Electronics",
    period: "2022.09–2023.02",
    startDate: "2022-09-01",
    endDate: "2023-02-01",
    organization: "Dongguk University × NeuroCircuit",
    summary:
      "Developed color-normalization preprocessing for a limited scalp-microscope dataset and improved four-level alopecia-severity classification.",
    contribution:
      "Developed color normalization and targeted augmentation, ran CNN ensemble experiments, and contributed to the paper’s experimental analysis and writing.",
    problem:
      "Large color shifts caused by lighting and skin tone could dominate medically relevant scalp patterns and lead the model to learn nuisance features.",
    difficulty:
      "Collecting a much larger balanced dataset was not immediately feasible, so preprocessing had to reduce color variation without removing lesion and hair information.",
    firstApproach:
      "Grouped representative red, yellow, peach, green, and blue cases and analyzed where simple tone normalization failed.",
    decision:
      "Applied reference color normalization with targeted red-channel and PCA augmentation, then combined predictions from complementary CNN backbones.",
    implementation:
      "Developed the color-normalization and augmentation code and trained an ensemble of DenseNet, XceptionNet, and ResNet models.",
    result:
      "Improved F1 by about 12 percentage points and achieved 95.84% accuracy. The study was published in Electronics and selected as an Editor’s Choice article.",
    learned:
      "With limited data, precisely defining and correcting nuisance variation can be more effective than simply increasing model capacity.",
    metrics: [
      { value: "+12%p", label: "F1" },
      { value: "95.84%", label: "accuracy" },
    ],
    tags: [
      "DenseNet",
      "Xception",
      "ResNet",
      "Color normalization",
      "Augmentation",
    ],
    views: ["all", "research", "data"],
    featured: false,
    image: "/images/projects/scalp-color-normalization.png",
    imageAlt:
      "Color-normalization equations and scalp-image examples before and after preprocessing.",
    links: [
      { label: "Paper", href: "https://doi.org/10.3390/electronics12061380" },
      { label: "Code", href: "https://github.com/Yuyeon-Kim/ScalpAnalysis" },
    ],
  },
  {
    slug: "psychosis-hippocampal-shape",
    title: "Hippocampal Shape Across Psychosis Risk States",
    eyebrow: "Neuroimaging · Surface Statistics · Co-first author",
    period: "2024.09–2026.08",
    startDate: "2024-09-01",
    endDate: "2026-08-31",
    organization: "POSTECH × Seoul National University Hospital",
    summary:
      "Compared hippocampal volume and local surface deformation across genetic risk, clinical high risk, first-episode psychosis, and healthy control groups.",
    contribution:
      "Co-first author. Built and improved surface generation, registration, and feature-extraction pipelines; conducted volumetric and vertex-wise statistics; and wrote the Methods section.",
    problem:
      "Whole-structure or subfield volume can average away opposing local deformations, obscuring stage-specific patterns across psychosis risk and illness onset.",
    difficulty:
      "The four cohorts differed in demographic and clinical covariates, while vertex-wise statistics required reliable correspondence and multiple-comparison control.",
    firstApproach:
      "Aligned subject surfaces and analyzed volumetric change together with the magnitude and directional coherence of vertex-wise deformation.",
    decision:
      "Separated inherited genetic risk, symptomatic clinical risk, and illness onset instead of treating them as a single continuous stage.",
    implementation:
      "Contributed surface generation, registration, feature extraction, MANCOVA, ANCOVA, covariate adjustment, and multiple-comparison correction for 360 participants: 95 FEP, 76 CHR-P, 49 unaffected relatives, and 140 healthy controls.",
    result:
      "Found concentrated bilateral inward deformation centered on CA1 in first-episode psychosis. Clinical- and genetic-risk groups showed distinct posterior surface patterns that were not detected by volume analysis. The manuscript was prepared with co-first authorship.",
    learned:
      "Volume and surface representations answer different clinical questions; the chosen representation determines which disease pattern can be detected.",
    metrics: [
      { value: "360", label: "participants" },
      { value: "4", label: "risk states" },
      { value: "Co-1st", label: "authorship" },
    ],
    tags: [
      "Surface morphometry",
      "MRI",
      "MANCOVA",
      "ANCOVA",
      "SurfStat",
      "Procrustes",
    ],
    views: ["all", "research", "data"],
    featured: false,
    image: "/images/projects/psychosis-hippocampal-shape.png",
    imageAlt:
      "Hippocampal subregions and vertex-wise deformation maps across psychosis risk states.",
  },
  {
    slug: "maternal-depression-brain-similarity",
    title: "Maternal Depression & Brain Similarity",
    eyebrow: "Neuroimaging · Intergenerational analysis",
    period: "2024.04–2026.08",
    startDate: "2024-04-01",
    endDate: "2026-08-31",
    organization: "POSTECH × Korea Brain Research Institute",
    summary:
      "Analyzed how maternal depression and parenting stress relate to the maternal brain, mother–child brain similarity, and the developing child brain.",
    contribution:
      "Implemented and analyzed MIND-based structural similarity across nine morphometric features and 68 ROIs, validated the imaging statistics, and contributed to the manuscript.",
    problem:
      "The relationships among maternal depression, parenting stress, structural and functional brain similarity, and child depression measures span several linked levels that simple pairwise correlations cannot describe well.",
    difficulty:
      "The analysis combined resting-state activation with nine morphometric features across many brain regions and behavioral outcomes.",
    firstApproach:
      "Organized the study into three levels: the maternal parenting brain, mother–child brain similarity, and the child’s developing brain.",
    decision:
      "Modeled the statistical relationships among these levels with structural regression rather than listing disconnected correlations, and interpreted the observational findings as associations rather than causal effects.",
    implementation:
      "Analyzed 119 mother–child dyads with completed neuroimaging, implementing MIND-based structural similarity from distributions of nine morphometric features across 68 ROIs and comparing it with functional similarity and behavioral measures.",
    result:
      "Identified statistical associations linking maternal depression and parenting stress with maternal brain measures, mother–child similarity, and child-depression-related measures, including effects in regions involved in empathy processing.",
    learned:
      "In multi-institutional research, each statistical result must remain traceable to a clearly defined biological and behavioral question to avoid overinterpretation.",
    metrics: [
      { value: "119", label: "dyads" },
      { value: "9", label: "shape features" },
    ],
    tags: [
      "MRI",
      "Brain similarity",
      "Statistical modeling",
      "MATLAB",
      "Interdisciplinary research",
    ],
    views: ["all", "research", "data"],
    featured: false,
    image: "/images/projects/maternal-brain-similarity.png",
    imageAlt:
      "Intergenerational neuroimaging workflow linking maternal depression, parenting stress, and mother-child brain similarity.",
  },
  {
    slug: "brain-tumor-deformation-analysis",
    title: "Deformation-Based Brain Tumor Analysis",
    eyebrow: "Medical Imaging · Exploratory research",
    period: "2024.05–2024.08",
    startDate: "2024-05-01",
    endDate: "2024-08-31",
    organization: "POSTECH × Seoul St. Mary’s Hospital",
    summary:
      "Explored whether deformation fields learned through unsupervised image registration could reveal structural changes associated with brain tumors.",
    contribution:
      "Built the MRI preprocessing and unsupervised VoxelMorph pipeline, analyzed tumor-region deformation behavior, and defined validation questions with clinical collaborators.",
    problem:
      "Tumor labels are costly, but the way a tumor distorts surrounding anatomy may provide a useful weak signal for detection.",
    difficulty:
      "Changes in a deformation field can reflect registration behavior or model artifacts as well as pathology, so visual expansion alone cannot establish detection performance.",
    firstApproach:
      "Trained a VoxelMorph-based unsupervised registration model and inspected how the deformation field and warped image changed around tumor regions.",
    decision:
      "Treated automatic expansion around tumors as a feasibility signal that required follow-up validation, not as a confirmed performance result.",
    implementation:
      "Prepared the MRI pipeline, trained the unsupervised deformation model, analyzed tumor-region behavior, and discussed clinically meaningful evaluation with medical collaborators.",
    result:
      "Observed automatic expansion around tumor regions and established a concrete direction for evaluating deformation-derived tumor cues. No quantitative detection-performance claim was made without separate clinical validation.",
    learned:
      "An interesting model behavior remains a hypothesis until evaluation rules out registration artifacts and other alternative explanations.",
    metrics: [
      { value: "VoxelMorph", label: "unsupervised model" },
      { value: "Clinical", label: "validation design" },
    ],
    tags: [
      "VoxelMorph",
      "MRI",
      "Unsupervised learning",
      "Clinical collaboration",
    ],
    views: ["all", "research"],
    featured: false,
    image: "/images/projects/brain-tumor-deformation.svg",
    imageAlt:
      "Conceptual workflow for exploring tumor-related deformation fields with unsupervised image registration.",
    links: [
      {
        label: "Related code",
        href: "https://github.com/Yuyeon-Kim/brain-tumor-segmentation",
      },
    ],
  },
  {
    slug: "electric-kickboard-braking",
    title: "Automatic Braking for Electric Kickboards",
    eyebrow: "Embedded Vision · Safety",
    period: "2022.01–2022.06",
    startDate: "2022-01-16",
    endDate: "2022-06-28",
    organization: "Undergraduate project",
    summary:
      "Built an Xavier NX prototype that classified braking situations from a forward-facing camera and activated a physical brake mechanism.",
    contribution:
      "Developed the VGG16 braking classifier and end-to-end control software on Xavier NX, and supported Arduino and mechanical brake integration.",
    problem:
      "A compact mobility device needed to recognize hazardous situations and transmit a braking command within an embedded operating environment.",
    difficulty:
      "The prototype had to connect camera input, edge inference, Arduino communication, and physical braking rather than stop at an offline classification score.",
    firstApproach:
      "Defined camera frames as braking or non-braking situations and designed the end-to-end path from model output to hardware actuation.",
    decision:
      "Ran VGG16 on Jetson Xavier NX and sent an Arduino signal to activate a rubber brake pad whenever the frame was classified as requiring braking.",
    implementation:
      "Trained the VGG16 classifier, implemented the inference and control software, and supported integration of the Arduino and mechanical brake hardware.",
    result:
      "Achieved 98% braking-situation classification accuracy, completed a kickboard-mountable prototype, and submitted the work to an ICT competition.",
    learned:
      "Embedded vision must be evaluated across the entire path from sensor input to physical action, including latency and failure modes.",
    metrics: [
      { value: "98%", label: "accuracy" },
      { value: "Xavier NX", label: "edge deployment" },
    ],
    tags: ["VGG16", "Jetson Xavier NX", "Embedded AI", "Computer Vision"],
    views: ["all", "research", "robotics"],
    featured: false,
    image: "/images/projects/electric-kickboard-system.jpg",
    imageAlt:
      "Electric-kickboard braking prototype connecting a front camera, Jetson Xavier NX, Arduino, and braking actuator.",
  },
];

export const publications = [
  {
    year: "2026",
    title:
      "Sulcus-Aware Hippocampal Surface Modeling with Training-time Sulcus-guided Learning",
    venue: "MICCAI 2026",
    role: "First author",
    status: "Accepted",
    tags: ["Medical imaging", "Surface reconstruction", "Deformation"],
    href: "https://github.com/Shape-Lab/Sulcus-Aware-Hippo-Surface",
  },
  {
    year: "2026",
    title:
      "Surface-Based Hippocampal Morphometry Reveals Distinct Deformation Signatures Across Psychosis Risk States and Illness Onset",
    venue: "SNUH collaboration",
    role: "Co-first author",
    status: "Manuscript",
    tags: ["Psychosis", "Shape analysis", "Statistics"],
  },
  {
    year: "2026",
    title:
      "Depression and Parenting Stress Affect Parenting Brain, Developing Brain, and Their Similarity",
    venue: "Korea Brain Research Institute collaboration",
    role: "Co-author",
    status: "Manuscript",
    tags: ["Brain similarity", "Intergenerational imaging"],
  },
  {
    year: "2023",
    title: "Deep-Learning-Based Scalp Image Analysis Using Limited Data",
    venue: "Electronics 12(6), 1380",
    role: "Co-author",
    status: "Published · Editor’s Choice",
    tags: ["Computer vision", "Limited data"],
    href: "https://doi.org/10.3390/electronics12061380",
  },
  {
    year: "2023",
    title:
      "Research on Knowledge Distillation Applied to Lightweight Crowd Counting",
    venue: "ACK 2023",
    role: "Joint first author",
    status: "Published",
    tags: ["Knowledge distillation", "Edge AI"],
    href: "https://doi.org/10.3745/PKIPS.y2023m11a.918",
  },
  {
    year: "2023",
    title:
      "A Study of Object-Specific Parallel Processing Methods and Segmentation Using DBSCAN for Efficient 3D Mesh Generation",
    venue: "KCC 2023",
    role: "Joint first author",
    status: "Published · 3rd prize",
    tags: ["Point cloud", "Parallel processing"],
    href: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11488590",
  },
];

export const experiences = [
  {
    period: "2024.04–2026.08",
    organization: "POSTECH Medical Information Processing Lab",
    role: "Graduate Researcher · Lab Manager · Teaching Assistant",
    type: "Research",
    views: ["all", "research", "data"] as ViewKey[],
    highlights: [
      "First-authored MICCAI 2026 work on topology-consistent hippocampal reconstruction.",
      "Collaborated with SNUH, KBRI, Seoul St. Mary’s Hospital, and an industry partner.",
      "Coordinated lab operations and automated recurring notices with a Slack bot.",
    ],
  },
  {
    period: "2025.08–2026.04",
    organization: "Industry Partner × POSTECH",
    role: "Industry Collaboration Researcher",
    type: "Industry research",
    views: ["all", "data"] as ViewKey[],
    highlights: [
      "Developed a KNN similarity-search and error-analysis framework for a confidential large-scale data project.",
    ],
  },
  {
    period: "2023.09–2024.04",
    organization: "KIST Intelligent Robotics",
    role: "Undergraduate Researcher",
    type: "Research",
    views: ["all", "research", "robotics", "semiconductor"] as ViewKey[],
    highlights: [
      "Improved smart-farm vision models and delivered a PyQt5 measurement system exhibited at CES 2024.",
    ],
  },
  {
    period: "2021.10–2023.08",
    organization: "Dongguk University ATRC",
    role: "Undergraduate Researcher",
    type: "Robotics",
    views: ["all", "robotics", "semiconductor"] as ViewKey[],
    highlights: [
      "Built ROS2/LiDAR railway inspection algorithms with KORAIL and debugged Virtual LiDAR packet code for an ADD project.",
    ],
  },
  {
    period: "2021.03–2021.10",
    organization: "Highconsi · SidaeInjae",
    role: "Educational Content Operations",
    type: "Part-time",
    views: ["all", "data"] as ViewKey[],
    highlights: [
      "Updated multi-subject workbook formats, coordinated task allocation, and standardized repeatable document production.",
    ],
  },
  {
    period: "2021.01–2021.02",
    organization: "Mobiltech",
    role: "3D Point-Cloud Labeling Lead",
    type: "Part-time",
    views: ["all", "data", "robotics"] as ViewKey[],
    highlights: [
      "Cleaned moving objects, reviewed peer output, provided feedback, and consolidated 3D labeling deliverables.",
    ],
  },
  {
    period: "2020–2021",
    organization: "Tutoring · SelectStar · O2Line · GS25",
    role: "Teaching, Data Labeling, Content Review, Customer Service",
    type: "Career archive",
    views: ["all"] as ViewKey[],
    highlights: [
      "Built early experience in accuracy, customer communication, task ownership, and repeatable work.",
    ],
  },
];

export const education = [
  {
    period: "2024.09–2026.08",
    institution: "POSTECH",
    degree: "M.S., Graduate School of Artificial Intelligence",
    detail:
      "GPA 4.0/4.3 · Top 3% · Medical imaging, computer vision, statistical analysis",
  },
  {
    period: "2020.03–2024.02",
    institution: "Dongguk University",
    degree: "B.S., Computer Science and Engineering",
    detail: "GPA 4.28/4.5 · Summa Cum Laude · 2nd of 64",
  },
];

export const semiconductorEducation = [
  {
    period: "2026.09–Present",
    title: "AI Semiconductor Process & Equipment Control Software",
    provider: "SeSAC Seongdong",
    detail:
      "Process, equipment control, data analysis, and manufacturing software intensive program.",
  },
  {
    period: "2026.07–2026.08",
    title: "Data-Driven Semiconductor Yield Management & Optimization",
    provider: "Comento",
    detail:
      "Yield, test, recipe tuning, FEM, split/cliff evaluation, correlation, and regression.",
  },
  {
    period: "2026.08",
    title: "Machine Learning for Semiconductor Process Improvement",
    provider: "Semicon Bootcamp",
    detail:
      "Spatial ALD, silicon LPCVD, DOE, SHAP, constrained optimization, and AI-agent experiment recommendation.",
  },
];

export const awards = [
  { year: "2024", title: "Summa Cum Laude", issuer: "Dongguk University" },
  {
    year: "2023",
    title: "3rd Prize, Undergraduate/Junior Paper Competition",
    issuer: "KCC",
  },
  {
    year: "2023",
    title: "Encouragement Award",
    issuer: "ICT Mentoring Competition",
  },
  { year: "2021", title: "3rd Prize", issuer: "Farm Competition" },
  { year: "2020", title: "2nd Prize", issuer: "Creative Idea Contest" },
];

export const certifications = [
  { year: "2026", title: "AICE Associate", issuer: "KT / 한국경제신문" },
  { year: "2026", title: "ADsP", issuer: "Korea Data Agency" },
  { year: "2026", title: "OPIc IH", issuer: "ACTFL" },
  { year: "2026", title: "Six Sigma White Belt", issuer: "CSSC" },
  { year: "2026", title: "Kaggle Intro to SQL", issuer: "Kaggle" },
  {
    year: "2021",
    title: "IPAT Level 5",
    issuer: "Korea Invention Promotion Association",
  },
];

export const skillGroups = [
  {
    title: "AI / ML",
    items: [
      { name: "PyTorch", evidence: "MICCAI · Scalp · Crowd Counting" },
      { name: "Scikit-learn", evidence: "DBSCAN · KNN · Semiconductor ML" },
      {
        name: "TensorFlow / Keras",
        evidence: "Vision classification projects",
      },
    ],
  },
  {
    title: "Computer Vision",
    items: [
      {
        name: "3D / Medical",
        evidence: "VoxelMorph · Surface reconstruction · MRI",
      },
      {
        name: "Detection / Segmentation",
        evidence: "SAM · YOLOR · EfficientNet · ResNet",
      },
      { name: "Point Cloud", evidence: "LiDAR · DBSCAN · SECOND · Mesh" },
    ],
  },
  {
    title: "Data / Statistics",
    items: [
      { name: "Python", evidence: "NumPy · Pandas · SciPy · statsmodels" },
      {
        name: "Statistical analysis",
        evidence: "MANCOVA · ANCOVA · multiple comparison",
      },
      {
        name: "Process analytics",
        evidence: "DOE · SHAP · regression · yield",
      },
    ],
  },
  {
    title: "Engineering",
    items: [
      { name: "Robotics", evidence: "ROS1 · ROS2 · LiDAR · Unity C#" },
      { name: "Development", evidence: "C/C++ · C# · Java · Linux · Git" },
      { name: "Delivery", evidence: "PyQt5 · refactoring · field integration" },
    ],
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
