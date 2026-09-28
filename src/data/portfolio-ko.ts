import type { ViewKey } from './portfolio';

export interface ProjectKo {
  slug: string;
  title: string;
  eyebrow: string;
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
  imageAlt: string;
}

export const profileKo = {
  role: '정신의학·의료영상 AI 연구자',
  tagline: '의료영상에서 임상적으로 의미 있는 형태 변화를 연구합니다.',
  summary:
    '의료영상과 정신의학 데이터를 중심으로 머신러닝 연구를 수행하고 있습니다. 해마 표면 복원과 형태 분석, 임상 데이터 해석을 주요 주제로 다루며, 로보틱스와 제조 AI 프로젝트 경험도 보유하고 있습니다.',
  location: '대한민국 서울',
};

export const viewsKo: { key: ViewKey; label: string; shortLabel: string }[] = [
  { key: 'all', label: '전체 경험', shortLabel: '전체' },
  { key: 'research', label: 'AI / ML 연구', shortLabel: 'AI / ML' },
  { key: 'data', label: '데이터 사이언스', shortLabel: '데이터' },
  { key: 'semiconductor', label: '반도체 AI', shortLabel: '반도체' },
  { key: 'robotics', label: '로보틱스 / 3D', shortLabel: '로보틱스' },
];

export const metricsKo = [
  { label: '해마 고랑 경계 오차', context: 'MICCAI 2026' },
  { label: '3D 메쉬 생성 시간', context: 'KCC 2023' },
  { label: 'Teacher 대비 Student 모델 크기', context: 'ACK 2023' },
  { label: 'Spatial ALD 생산성', context: '공정 최적화 실습' },
  { label: '스마트팜 AI 전시', context: 'KIST' },
];

export const projectsKo: ProjectKo[] = [
  {
    slug: 'sulcus-aware-hippocampal-surface',
    title: '해마 고랑을 보존하는 3차원 표면 복원',
    eyebrow: '의료 AI · 3차원 의료영상 · MICCAI 2026',
    organization: 'POSTECH 의료정보처리연구실',
    summary:
      'MRI에서 쉽게 사라지는 얇은 해마 고랑을 보존하면서, 피험자 간 정점 대응과 표면 위상을 유지하는 3차원 복원 모델을 개발했다.',
    contribution:
      '제1저자로 연구를 주도했으며, 고랑 보존 변형 모델 설계, 실험 파이프라인 구축, 형태 분석 및 논문 작성 전반을 담당했다.',
    problem:
      '1 mm MRI에서는 해마 고랑이 부분용적효과와 표면 평활화로 쉽게 사라진다. 그러나 세부 형상을 과도하게 보존하면 자기 교차나 위상 오류가 생길 수 있다.',
    difficulty:
      '고해상도 고랑 레이블은 제작 비용이 높아, 추론 단계까지 레이블을 요구하는 방법은 대규모 연구 데이터에 적용하기 어렵다.',
    firstApproach:
      '마스크 기반 표면 생성, 레벨셋, 변형 기반 복원, 종단간 메쉬 예측을 비교했다. 전체 해마 오차뿐 아니라 고랑 재현성과 기하학적 오류도 함께 평가했다.',
    decision:
      '고정 위상 템플릿을 만든 뒤 이를 피험자별 영상에 미분동형사상으로 변형했다. 고랑 레이블은 학습 보조 신호로만 사용해 추론 단계의 의존성을 없앴다.',
    implementation:
      '복셀 템플릿과 고정 위상 메쉬를 구축하고 VoxelMorph 기반 변형 네트워크를 학습했다. 손실 함수는 볼륨, 표면, 고랑, 변형장 정규화 항으로 구성했다.',
    result:
      '가장 우수한 비교 모델의 고랑 경계 오차를 0.97 mm에서 0.66 mm로 약 32% 줄였다. 위상 오류는 없었고 자기 교차는 매우 작은 국소 사례 1건에 그쳤다. 생성된 대응 표면을 이용해 정상군과 알츠하이머병군의 고랑 주변 형태 차이도 분석했다. 연구는 MICCAI 2026에 제1저자 논문으로 채택됐다.',
    learned:
      '해부학적으로 의미 있는 구조를 보존하는 것이 전체 재구성 오차를 줄이는 것만큼 중요함을 확인했다.',
    metrics: [
      { value: '32% ↓', label: '고랑 오차' },
      { value: '0', label: '위상 오류' },
      { value: '제1저자', label: '논문 기여' },
    ],
    tags: ['PyTorch', 'VoxelMorph', 'MRI', '미분동형사상', '3차원 메쉬', '형태 분석'],
    imageAlt: '고랑 재현성과 형상 통계를 포함한 해마 표면 복원 방법 비교.',
  },
  {
    slug: 'parallel-3d-mesh-pipeline',
    title: '대규모 포인트 클라우드의 병렬 메쉬 생성',
    eyebrow: '3차원 데이터 · 병렬 처리 · KCC 2023',
    organization: '동국대학교 × VESTELLALAB',
    summary:
      '약 3,800만 개의 주차장 포인트 클라우드를 객체별로 나누어 병렬 처리함으로써 메쉬 생성 시간을 약 90% 단축했다.',
    contribution:
      '프로젝트 리더이자 공동 제1저자로 객체별 처리 구조를 설계하고, 병렬 메쉬 생성, 스레드별 성능 비교, SECOND 차량 검출과 Unity 시각화를 구현했다.',
    problem:
      '전체 포인트 클라우드를 한 번에 메쉬로 변환하면 처리 시간과 메모리 사용량이 급증해 일반 사무용 워크스테이션에서 실행하기 어려웠다.',
    difficulty:
      '더 강한 하드웨어를 사용하는 것만으로는 구조적인 병목을 해결할 수 없었으며, 정적 시설물과 차량도 서로 다른 방식으로 처리해야 했다.',
    firstApproach:
      '전체 데이터 단일 처리, 객체별 순차 처리, 객체별 병렬 처리를 비교하고 스레드 수에 따른 시간과 메모리 사용량을 측정했다.',
    decision:
      '정적 객체는 DBSCAN으로 분리해 독립적인 메쉬 작업 단위로 만들고, 차량은 재사용 가능한 3D 객체로 처리하기 위해 SECOND 기반 검출을 적용했다.',
    implementation:
      'DBSCAN 군집화, 포인트 보간, 객체별 병렬 메쉬 생성, SECOND 차량 검출을 구현하고 결과를 Unity 시각화 파이프라인에 연결했다.',
    result:
      '메쉬 생성 시간을 약 90% 줄이고 제한된 메모리 환경에서도 실행 가능한 구조를 만들었다. KCC 2023에 공동 제1저자로 논문을 게재했으며 학부생·주니어 논문경진대회 3위를 수상했다.',
    learned:
      '알고리즘 자체보다 처리 단위를 재설계하는 것이 성능 개선에 더 큰 영향을 줄 수 있음을 확인했다.',
    metrics: [
      { value: '90% ↓', label: '메쉬 생성 시간' },
      { value: '3,800만', label: '포인트 수' },
      { value: '3위', label: '논문경진대회' },
    ],
    tags: ['포인트 클라우드', 'DBSCAN', '병렬 처리', 'SECOND', 'Unity', 'Python'],
    imageAlt: 'DBSCAN 기반 객체 분할 전후의 포인트 클라우드 비교.',
  },
  {
    slug: 'smart-farm-vision-automation',
    title: '컴퓨터 비전 기반 스마트팜 계측 자동화',
    eyebrow: '컴퓨터 비전 · 자동화 · CES 2024',
    organization: 'KIST 지능로봇연구단',
    summary:
      '작물 줄기와 분기점을 검출하고 직경을 측정하는 컴퓨터 비전 파이프라인을 개선해 연구 현장에서 사용할 수 있는 GUI로 구현했다.',
    contribution:
      'SAM·YOLOR 분할과 EfficientNet 분기점 검출을 개선하고, 줄기 직경 측정 알고리즘과 PyQt5 프로그램을 개발·리팩토링했다.',
    problem:
      '줄기 직경과 분기점 측정을 사람이 반복 수행해 시간이 오래 걸렸고, 이미지와 작업자에 따라 결과가 달라질 수 있었다.',
    difficulty:
      'AI 검출 성능뿐 아니라 기울어진 줄기의 기하학적 측정 오차와 연구자가 반복 사용할 수 있는 소프트웨어 구조를 함께 개선해야 했다.',
    firstApproach:
      '기존 파이프라인을 검출 모델, 측정 알고리즘, GUI 구조로 분리해 오류가 발생하는 단계를 각각 분석했다.',
    decision:
      'SAM·YOLOR 기반 줄기 분할, EfficientNet 기반 분기점 검출, 최소자승법 기반 직경 측정을 결합하고 소프트웨어는 전략·싱글턴 패턴으로 재구성했다.',
    implementation:
      '모델 학습과 평가, 줄기 기울기를 반영한 직경 계산, PyQt5 GUI 개발 및 리팩토링을 담당하고 자동화 시스템에 연결했다.',
    result:
      '줄기 분할 성능을 약 5%, 분기점 검출 성능을 약 10% 높이고 직경 측정 RMSE를 22.54% 낮췄다. 결과물은 CES 2024에 전시됐으며 특허 출원과 논문 준비로 이어졌다.',
    learned:
      '현장용 AI에서는 모델 정확도와 측정 알고리즘, 사용자 인터페이스가 같은 결과 기준을 공유해야 한다.',
    metrics: [
      { value: '+5%', label: '줄기 분할' },
      { value: '+10%', label: '분기점 검출' },
      { value: '22.54% ↓', label: '직경 RMSE' },
    ],
    tags: ['SAM', 'YOLOR', 'EfficientNet', '최소자승법', 'PyQt5', '디자인 패턴'],
    imageAlt: '작물 분기점 검출과 줄기 직경 측정 결과가 표시된 스마트팜 이미지.',
  },
  {
    slug: 'knowledge-distillation-crowd-counting',
    title: '지식 증류 기반 군중 계수 모델 경량화',
    eyebrow: '엣지 AI · 모델 경량화 · ACK 2023',
    organization: '한이음 ICT 멘토링',
    summary:
      '지하철 영상을 서버로 전송하지 않고 엣지 장치에서 혼잡도를 추정할 수 있도록 군중 계수 모델을 경량화했다.',
    contribution:
      '공동 제1저자이자 발표자로 Teacher–Student 모델 조합, 지식 증류 손실 함수와 학습 일정을 설계하고 α 실험 및 시연 소프트웨어 개발에 참여했다.',
    problem:
      '여러 카메라의 영상을 서버로 전송하면 네트워크 비용이 커지지만, 정확도가 높은 군중 계수 모델은 엣지 장치에서 실행하기에 너무 컸다.',
    difficulty:
      '366.6 MB의 Teacher 모델은 정확하지만 무거웠고, 0.532 MB의 MCNN은 배포 가능하지만 MAE가 110.2로 높았다.',
    firstApproach:
      '17개 군중 계수 모델의 정확도, 출력 형식, 파라미터 수와 엣지 장치 적합성을 비교했다.',
    decision:
      'M-SFANet을 Teacher 모델, MCNN을 Student 모델로 선정하고 정답 손실과 지식 증류 손실을 함께 학습했다. 밀도 지도 회귀 문제에 불필요한 소프트맥스 온도는 사용하지 않았다.',
    implementation:
      '2단계 학습 과정과 코사인 어닐링 웜 리스타트를 적용하고, ShanghaiTech Part A에서 α 값에 따른 MAE와 RMSE를 비교했다.',
    result:
      '모델 크기를 0.543 MB로 유지해 Teacher 대비 99.85% 줄이면서 MCNN의 MAE를 110.2에서 90.86으로 17.55% 개선했다. ACK 2023에 공동 제1저자로 논문을 발표했고 ICT 멘토링 공모전 장려상을 받았다.',
    learned:
      '경량화에서는 크기 최소화보다 배포 환경에서 정확도와 자원 사용량의 균형을 찾는 것이 중요함을 확인했다.',
    metrics: [
      { value: '99.85% ↓', label: '모델 크기' },
      { value: '17.55%', label: 'MAE 개선' },
      { value: '0.543 MB', label: 'Student 모델' },
    ],
    tags: ['지식 증류', 'M-SFANet', 'MCNN', 'PyTorch', '엣지 AI'],
    imageAlt: '엣지 군중 계수와 혼잡도 알림 서비스를 시연한 지하철역 미니어처.',
  },
  {
    slug: 'semiconductor-process-optimization',
    title: '반도체 증착 공정 최적화',
    eyebrow: '제조 AI · DOE · 교육 프로젝트',
    organization: 'Semicon Bootcamp',
    summary:
      '실험계획법, 머신러닝, SHAP과 제약 조건 탐색을 활용해 반도체 증착 공정의 산포와 생산성 사이의 트레이드오프를 분석했다.',
    contribution:
      '실험 데이터를 분석하고 머신러닝 모델 비교, SHAP 해석, 제약 조건 탐색과 확인 실험 평가를 수행했다.',
    problem:
      '공정 생산성을 높이면서도 웨이퍼 내·웨이퍼 간 산포가 허용 범위를 벗어나지 않는 조건을 찾아야 했다.',
    difficulty:
      '회전 속도나 로트 수 증가는 생산성을 높일 수 있지만 WiW 또는 W2W 산포를 악화시킬 수 있어 단일 지표만으로 최적 조건을 선택할 수 없었다.',
    firstApproach:
      '상관분석과 실험 데이터를 바탕으로 선형 회귀, 랜덤 포레스트, 그래디언트 부스팅을 비교하고 R², RMSE와 교차검증 결과를 평가했다.',
    decision:
      '머신러닝 예측값을 정답이 아닌 후보 조건 생성기로 사용했다. SHAP으로 영향 변수를 점검하고 확인 실험을 통과한 조건만 최종 결과로 채택했다.',
    implementation:
      'Python으로 데이터 분석, 모델 학습, SHAP 해석, 차분 진화 기반 조건 탐색, 제약 조건 필터링과 실험 권고 과정을 구성했다.',
    result:
      'Spatial ALD 실습에서는 회전 속도 조정으로 UPH를 28.12에서 30.47로 8.4% 높이면서 확인 실험의 WiW 산포를 1.15%에서 1.10%로 낮췄다. LPCVD에서는 5개 로트에서 6개 로트로 변경해 UPH를 20% 높였지만 W2W 산포가 0.96%에서 2.86%로 증가하는 트레이드오프를 확인했다.',
    learned:
      '공정 최적화는 예측값이 가장 큰 조건을 고르는 일이 아니라 품질 기준을 먼저 정의하고, 작은 확인 실험으로 추천 조건을 검증하는 과정이다.',
    metrics: [
      { value: '+8.4%', label: 'ALD 생산성' },
      { value: '1.10%', label: '확인 실험 WiW' },
      { value: '+20%', label: 'LPCVD UPH' },
    ],
    tags: ['실험계획법', '랜덤 포레스트', '그래디언트 부스팅', 'SHAP', '차분 진화', '수율'],
    imageAlt: 'ALD와 LPCVD의 생산성 및 균일도 트레이드오프를 보여 주는 반도체 공정 최적화 요약.',
  },
  {
    slug: 'industry-similarity-search',
    title: 'KNN 기반 유사 사례 검색과 오류 분석',
    eyebrow: '데이터 사이언스 · 비공개 산업 프로젝트',
    organization: '산업 공동연구 × POSTECH',
    summary:
      '대규모 데이터에서 비교 가능한 사례를 찾고, 결과의 성공·실패 원인을 함께 분석할 수 있는 KNN 기반 프레임워크를 개발했다.',
    contribution:
      'KNN 유사도 검색 파이프라인을 개발하고 오류 사례 분류, 하이퍼파라미터 조정과 협업용 결과 문서화를 담당했다.',
    problem:
      '전체 평균 점수만으로는 개별 결과가 왜 성공하거나 실패했는지 설명하기 어려워, 유사 사례 검색과 오류 분석을 연결할 필요가 있었다.',
    difficulty:
      '특징 구성과 하이퍼파라미터에 따라 검색되는 이웃이 달라졌고, 서로 다른 실패 유형이 하나의 종합 지표에 가려질 수 있었다.',
    firstApproach:
      '최근접 이웃 검색 결과를 직접 검토해 반복되는 실패 사례를 분류하고, 동일한 평가 기준으로 하이퍼파라미터 조합을 비교했다.',
    decision:
      '유사도 품질과 오류 유형을 하나의 지표로 합치지 않고, 검색 결과와 대표 실패 사례를 함께 검토하는 구조를 선택했다.',
    implementation:
      'KNN 검색, 결과 요약, 오류 유형 분류와 하이퍼파라미터 조정 과정을 구성하고 변경 사항을 추적할 수 있도록 문서화했다.',
    result:
      '유사도 결과를 분류된 오류 사례와 연결해 하이퍼파라미터 변경의 영향을 반복적으로 검토할 수 있는 분석 체계를 구축했다.',
    learned:
      '유사도 점수만 높이는 것보다 검색 결과를 오류 유형과 함께 해석할 수 있는 구조가 중요함을 확인했다.',
    metrics: [
      { value: 'KNN', label: '검색 프레임워크' },
      { value: '3단계', label: '검색 · 검토 · 조정' },
    ],
    tags: ['KNN', '오류 분석', '하이퍼파라미터 조정', '평가 설계', '협업'],
    imageAlt: 'KNN 검색, 오류 분석, 하이퍼파라미터 조정 흐름을 나타낸 비공개 정보 제외 개념도.',
  },
  {
    slug: 'railway-lidar-inspection-robot',
    title: 'LiDAR 기반 철도시설 자율점검 로봇',
    eyebrow: '로보틱스 · LiDAR · 상용화',
    organization: '동국대학교 ATRC × KORAIL',
    summary:
      '자율주행 철도 점검 로봇에서 장애물, 자갈 부족, 지반 꺼짐, 침수를 탐지하는 LiDAR 알고리즘을 개발했다.',
    contribution:
      'C++·Python으로 4종 LiDAR 이상 탐지 모듈을 개발해 ROS2 로봇에 통합하고, Unity C# Virtual LiDAR 패킷 오류도 수정했다.',
    problem:
      '이동 중인 로봇에서 수집되는 LiDAR 데이터로 서로 다른 철도 이상 상태를 반복적이고 안정적으로 판별해야 했다.',
    difficulty:
      '오프라인 알고리즘 성능뿐 아니라 센서 수신, 좌표계, ROS 통신, 데이터 지연과 현장 임계값까지 함께 관리해야 했다.',
    firstApproach:
      'LiDAR 패킷 수신부터 ROS 노드 출력까지 전체 데이터 흐름을 추적하고 각 이상 상태의 물리적 정의에 맞춰 탐지 결과를 검증했다.',
    decision:
      '설명 가능성과 안정성이 중요한 이상 상태에는 기하학적 포인트 클라우드 처리를 사용하고, ROS2에서 각 기능을 독립된 노드로 연결했다.',
    implementation:
      'ROS2 Foxy 환경에서 C++·Python으로 장애물, 자갈 부족, 지반 꺼짐, 침수 탐지 기능을 구현했다. 별도 국방 협력 과제에서는 Unity C# Virtual LiDAR의 패킷 구조 오류도 수정했다.',
    result:
      '탐지 기능이 실제 점검 로봇에 통합됐으며 국토교통기술대전 전시와 상용화로 이어졌다.',
    learned:
      '로봇 시스템에서는 알고리즘 정확도뿐 아니라 센서 패킷, 시간 동기화, 좌표계와 운영 조건까지 함께 검증해야 함을 확인했다.',
    metrics: [
      { value: '4종', label: '이상 유형' },
      { value: 'ROS2', label: '통합 플랫폼' },
      { value: '상용화', label: '적용 결과' },
    ],
    tags: ['ROS2', 'LiDAR', 'C++', '포인트 클라우드', 'Unity C#', '현장 로보틱스'],
    imageAlt: 'LiDAR 이상 탐지 기능이 통합된 철도시설 자율주행 점검 로봇.',
  },
  {
    slug: 'scalp-image-analysis',
    title: '소규모 데이터를 활용한 두피 이미지 분석',
    eyebrow: '컴퓨터 비전 · 제한된 데이터 · Electronics',
    organization: '동국대학교 × NeuroCircuit',
    summary:
      '조명과 피부색 차이가 큰 소규모 두피 현미경 데이터에서 색상 일반화 전처리를 개발해 탈모 심각도 4단계 분류 성능을 개선했다.',
    contribution:
      '색상 정규화와 목적형 데이터 증강을 개발하고 CNN 앙상블 실험과 논문의 실험 분석·작성에 참여했다.',
    problem:
      '조명과 피부색에 따른 색상 편차가 의학적으로 중요한 두피 패턴보다 크게 나타나 모델이 불필요한 특징을 학습할 수 있었다.',
    difficulty:
      '대규모 균형 데이터를 새로 수집하기 어려웠으며, 색상 편차를 줄이면서 병변과 모발 특징은 보존해야 했다.',
    firstApproach:
      '대표적인 빨강·노랑·복숭아색·초록·파랑 이미지 그룹을 분석해 단순 색조 보정이 실패하는 사례를 확인했다.',
    decision:
      '기준 색상 정규화와 제한적인 적색 채널·PCA 데이터 증강을 적용하고 서로 다른 CNN의 예측을 결합했다.',
    implementation:
      '색상 정규화와 데이터 증강 코드를 개발하고 DenseNet, XceptionNet, ResNet 기반 모델을 학습·앙상블했다.',
    result:
      'F1 점수를 약 12%p 높이고 최종 정확도 95.84%를 달성했다. 연구는 Electronics에 게재됐으며 Editor’s Choice에 선정됐다.',
    learned:
      '데이터가 적을 때는 모델을 키우기보다 성능을 방해하는 요인을 정의하고 제한적으로 보정하는 접근이 효과적임을 확인했다.',
    metrics: [
      { value: '+12%p', label: 'F1' },
      { value: '95.84%', label: '정확도' },
    ],
    tags: ['DenseNet', 'Xception', 'ResNet', '색상 정규화', '데이터 증강'],
    imageAlt: '제한된 두피 이미지 데이터의 색상 일반화 전후 비교.',
  },
  {
    slug: 'psychosis-hippocampal-shape',
    title: '정신증 위험 단계에 따른 해마 형태 분석',
    eyebrow: '신경영상 · 표면 통계 · 공동 제1저자',
    organization: 'POSTECH × 서울대학교병원',
    summary:
      '유전적 위험군, 임상적 고위험군, 초발정신증군과 정상군의 해마 부피와 국소 표면 변형을 동일한 분석 체계에서 비교했다.',
    contribution:
      '공동 제1저자로 표면 생성·정합·특징 추출 파이프라인을 개선하고 부피 및 정점별 통계 분석과 연구 방법 작성을 담당했다.',
    problem:
      '전체 또는 하위 영역 부피만 사용하면 인접 부위의 서로 다른 변형이 평균화되어 질병 단계별 국소 패턴을 놓칠 수 있었다.',
    difficulty:
      '네 집단의 연령·성별·임상 특성이 달랐고, 정점별 통계에는 정확한 표면 대응점과 다중비교 보정이 필요했다.',
    firstApproach:
      '피험자 표면을 정렬한 뒤 부피 변화와 정점별 변형의 크기 및 방향 일관성을 함께 분석했다.',
    decision:
      '유전적 위험, 증상 기반 임상적 위험, 질병 발병을 하나의 연속 단계로 합치지 않고 별도 집단으로 비교했다.',
    implementation:
      '총 360명—초발정신증 95명, 임상적 고위험군 76명, 비발병 가족 49명, 정상군 140명—의 표면 생성·정합·특징 추출과 MANCOVA·ANCOVA·다중비교 보정에 참여했다.',
    result:
      '초발정신증군에서는 양측 CA1을 중심으로 집중된 내향 변형이 나타났다. 임상적 고위험군과 유전적 위험군에서는 부피 분석에서 드러나지 않은 서로 다른 후방부 표면 패턴이 관찰됐다. 공동 제1저자로 원고를 준비하고 있다.',
    learned:
      '같은 MRI 데이터에서도 부피와 표면 분석이 서로 다른 임상 정보를 제공함을 확인했다.',
    metrics: [
      { value: '360명', label: '참여자' },
      { value: '4개', label: '비교 집단' },
      { value: '공동 제1저자', label: '논문 기여' },
    ],
    tags: ['표면 형태계측', 'MRI', 'MANCOVA', 'ANCOVA', 'SurfStat', 'Procrustes'],
    imageAlt: '정신증 위험 단계별 해마 표면의 국소 변형 비교.',
  },
  {
    slug: 'maternal-depression-brain-similarity',
    title: '모성 우울 및 양육 스트레스와 모자 뇌 유사도',
    eyebrow: '신경영상 · 세대 간 분석',
    organization: 'POSTECH × 한국뇌연구원',
    summary:
      '모성 우울과 양육 스트레스가 어머니의 뇌, 모자 간 뇌 유사도, 아동의 발달 중인 뇌와 맺는 관계를 분석했다.',
    contribution:
      '9개 형태 특징과 68개 ROI를 이용한 MIND 구조 유사도를 구현·분석하고 영상 통계 검증과 원고 작성에 참여했다.',
    problem:
      '모성 우울, 양육 스트레스, 구조·기능적 뇌 유사도와 아동 우울 지표 사이의 관계가 여러 단계에 걸쳐 있어 단순 상관분석만으로 설명하기 어려웠다.',
    difficulty:
      '휴식 상태 뇌 활성과 9개의 형태 특징을 결합해야 했으며, 여러 뇌 영역과 행동 변수를 동시에 분석해야 했다.',
    firstApproach:
      '분석을 양육 관련 어머니 뇌, 모자 간 뇌 유사도, 발달 중인 아동 뇌의 세 수준으로 구분했다.',
    decision:
      '개별 상관계수를 나열하기보다 세 수준 사이의 관계를 구조회귀모형으로 분석했다. 관찰 연구의 한계를 고려해 인과관계가 아닌 연관성 중심으로 해석했다.',
    implementation:
      '영상 촬영을 완료한 119쌍의 모자 데이터를 사용했다. 68개 ROI에서 9개 형태 특징의 분포를 통합하는 MIND 기반 구조 유사도를 구현·분석하고 기능적 유사도 및 행동 지표와 비교했다.',
    result:
      '모성 우울과 양육 스트레스가 어머니의 뇌 특성, 모자 간 뇌 유사도와 아동 우울 관련 지표에 연결되는 통계적 관계를 확인했으며, 공감 처리와 관련된 영역에서 주요 연관성이 나타났다.',
    learned:
      '공동연구에서는 각 통계 결과가 어떤 생물학적·행동적 질문에 대응하는지 명확히 해야 과도한 해석을 줄일 수 있음을 확인했다.',
    metrics: [
      { value: '119쌍', label: '모자 쌍' },
      { value: '9개', label: '형태 특징' },
    ],
    tags: ['MRI', '뇌 유사도', '통계 모델링', 'MATLAB', '융합 연구'],
    imageAlt: '모성 우울과 모자 간 뇌 유사도 분석 흐름.',
  },
  {
    slug: 'brain-tumor-deformation-analysis',
    title: '변형장을 이용한 뇌종양 탐지 가능성 분석',
    eyebrow: '의료영상 · 탐색 연구',
    organization: 'POSTECH × 서울성모병원',
    summary:
      '비지도 영상 정합에서 생성되는 변형장이 종양으로 인한 구조적 변화를 나타내는지 탐색했다.',
    contribution:
      'MRI 전처리와 비지도 VoxelMorph 파이프라인을 구축하고 종양 주변 변형장을 분석했으며 의료진과 검증 방향을 정리했다.',
    problem:
      '종양 레이블 제작에는 많은 비용이 들지만, 종양이 주변 해부 구조를 변형한다는 점을 약한 학습 신호로 활용할 가능성이 있었다.',
    difficulty:
      '변형장의 변화는 병변뿐 아니라 정합 오류나 모델 특성에서도 발생할 수 있어 시각적 관찰만으로 탐지 성능을 주장할 수 없었다.',
    firstApproach:
      'VoxelMorph 기반 비지도 정합 모델을 학습하고 종양 주변에서 변형장과 정합 영상이 어떻게 달라지는지 관찰했다.',
    decision:
      '종양 주변의 자동 확장을 성능 결과가 아니라 후속 검증이 필요한 가능성 지표로 정의했다.',
    implementation:
      '영상 전처리와 비지도 변형 학습 파이프라인을 구성하고 의료진과 임상적으로 의미 있는 평가 방법을 논의했다.',
    result:
      '종양 영역 주변이 자동으로 확장되는 현상을 관찰해 변형 정보를 종양 탐지에 활용할 가능성을 확인했다. 정량적인 탐지 성능은 주장하지 않고 별도 임상 검증이 필요한 연구 방향으로 남겼다.',
    learned:
      '모델에서 관찰된 현상은 다른 원인을 배제하는 검증이 끝날 때까지 결과가 아닌 가설로 다뤄야 함을 확인했다.',
    metrics: [
      { value: 'VoxelMorph', label: '비지도 모델' },
      { value: '임상', label: '검증 설계' },
    ],
    tags: ['VoxelMorph', 'MRI', '비지도 학습', '임상 협업'],
    imageAlt: '뇌종양 주변 변형장의 탐색 분석.',
  },
  {
    slug: 'electric-kickboard-braking',
    title: '컴퓨터 비전 기반 전동 킥보드 자동 제동 장치',
    eyebrow: '임베디드 비전 · 안전',
    organization: '학부 프로젝트',
    summary:
      '전방 카메라 영상에서 제동 필요 여부를 분류하고 실제 제동 장치까지 작동시키는 Xavier NX 기반 시제품을 제작했다.',
    contribution:
      'Xavier NX에서 VGG16 제동 분류기와 전체 제어 소프트웨어를 개발하고 Arduino·기계식 제동 장치 통합을 지원했다.',
    problem:
      '소형 이동기기에 탑재할 수 있는 환경에서 위험 상황을 인식하고 제동 신호를 전달하는 전체 과정을 구현해야 했다.',
    difficulty:
      '영상 분류 정확도뿐 아니라 카메라 입력, 엣지 추론, Arduino 통신과 물리적 제동 장치의 연결을 함께 검증해야 했다.',
    firstApproach:
      '카메라 프레임을 제동·비제동 상황으로 구분하고 모델 출력이 실제 하드웨어 동작으로 이어지는 흐름을 설계했다.',
    decision:
      'VGG16을 Jetson Xavier NX에서 실행하고, 제동 상황으로 판단되면 Arduino에 신호를 보내 고무 패드가 작동하도록 구성했다.',
    implementation:
      'VGG16 학습, 추론 소프트웨어와 장치 제어 흐름을 구현하고 하드웨어 제작을 지원했다.',
    result:
      '제동 상황 분류 정확도 98%를 달성하고 킥보드에 장착 가능한 자동 제동 시제품을 완성해 ICT 공모전에 출품했다.',
    learned:
      '임베디드 비전에서는 모델 지표뿐 아니라 센서 입력부터 물리적 동작까지의 지연과 실패 경로를 함께 검증해야 함을 확인했다.',
    metrics: [
      { value: '98%', label: '분류 정확도' },
      { value: 'Xavier NX', label: '엣지 배포' },
    ],
    tags: ['VGG16', 'Jetson Xavier NX', '임베디드 AI', '컴퓨터 비전'],
    imageAlt: 'Jetson Xavier NX, Arduino, 기계식 제동 장치로 구성한 전동 킥보드 시제품.',
  },
];

export const projectKoBySlug = (slug: string) =>
  projectsKo.find((project) => project.slug === slug);

export const publicationsKo = [
  {
    title: '고랑 유도 학습을 이용한 해마 고랑 보존 3차원 표면 복원',
    venue: 'MICCAI 2026',
    role: '제1저자',
    status: '게재 예정',
    tags: ['의료영상', '표면 복원', '변형 모델'],
  },
  {
    title: '정신증 위험 단계와 질병 발병에 따른 해마 표면 변형 양상',
    venue: '서울대학교병원 공동연구',
    role: '공동 제1저자',
    status: '투고 준비 중',
    tags: ['정신증', '형상 분석', '통계'],
  },
  {
    title: '모성 우울과 양육 스트레스가 어머니의 뇌, 발달 중인 아동의 뇌 및 모자 뇌 유사도에 미치는 영향',
    venue: '한국뇌연구원 공동연구',
    role: '공동저자',
    status: '투고 준비 중',
    tags: ['뇌 유사도', '세대 간 영상 분석'],
  },
  {
    title: '제한된 데이터를 활용한 딥러닝 기반 두피 이미지 분석',
    venue: 'Electronics 12(6), 1380',
    role: '공동저자',
    status: '게재 · Editor’s Choice',
    tags: ['컴퓨터 비전', '제한된 데이터'],
  },
  {
    title: '군중 계수 모델 경량화를 위한 지식 증류 적용 연구',
    venue: 'ACK 2023',
    role: '공동 제1저자',
    status: '게재',
    tags: ['지식 증류', '엣지 AI'],
  },
  {
    title: '효율적인 3D 메쉬 생성을 위한 객체별 병렬 처리와 DBSCAN 분할 방법 연구',
    venue: 'KCC 2023',
    role: '공동 제1저자',
    status: '게재 · 논문경진대회 3위',
    tags: ['포인트 클라우드', '병렬 처리'],
  },
];

export const experiencesKo = [
  {
    organization: 'POSTECH 의료정보처리연구실',
    role: '대학원 연구원 · 연구실 관리자 · 조교',
    type: '연구',
    highlights: [
      '위상 일관성을 유지하는 해마 표면 복원 연구를 수행해 MICCAI 2026 제1저자 논문으로 발표했다.',
      '서울대학교병원, 한국뇌연구원, 서울성모병원 및 산업 파트너와 공동연구를 수행했다.',
      '연구실 운영을 조율하고 반복 공지를 Slack bot으로 자동화했다.',
    ],
  },
  {
    organization: '산업 파트너 × POSTECH',
    role: '산업 공동연구원',
    type: '산업 연구',
    highlights: [
      '비공개 대규모 데이터 프로젝트를 위한 KNN 유사도 검색 및 오류 분석 프레임워크를 개발했다.',
    ],
  },
  {
    organization: 'KIST 지능로봇연구단',
    role: '학부연구생',
    type: '연구',
    highlights: [
      '스마트팜 비전 모델을 개선하고 CES 2024에 전시된 PyQt5 계측 시스템을 개발했다.',
    ],
  },
  {
    organization: '동국대학교 ATRC',
    role: '학부연구생',
    type: '로보틱스',
    highlights: [
      'KORAIL 협력 ROS2·LiDAR 철도 점검 알고리즘을 개발하고 국방 협력 과제의 Virtual LiDAR 패킷 코드를 수정했다.',
    ],
  },
  {
    organization: '하이컨시 · 시대인재',
    role: '교육 콘텐츠 운영',
    type: '파트타임',
    highlights: [
      '여러 과목의 교재 형식을 수정하고 업무를 배분하며 반복 가능한 문서 제작 과정을 표준화했다.',
    ],
  },
  {
    organization: '모빌테크',
    role: '3차원 포인트 클라우드 라벨링 리드',
    type: '파트타임',
    highlights: [
      '이동 객체를 정제하고 동료 결과물을 검수·피드백한 뒤 3D 라벨링 산출물을 통합했다.',
    ],
  },
  {
    organization: '과외 · 셀렉트스타 · 오투라인 · GS25',
    role: '교육 · 데이터 라벨링 · 콘텐츠 검수 · 고객 서비스',
    type: '초기 경력',
    highlights: [
      '정확성, 고객 커뮤니케이션, 업무 책임감과 반복 가능한 일 처리의 기초를 쌓았다.',
    ],
  },
];

export const educationKo = [
  {
    institution: 'POSTECH',
    degree: '인공지능대학원 석사',
    detail: 'GPA 4.0/4.3 · 상위 3% · 의료영상, 컴퓨터 비전, 통계 분석',
  },
  {
    institution: '동국대학교',
    degree: '컴퓨터공학 학사',
    detail: 'GPA 4.28/4.5 · 최우등 졸업 · 64명 중 2위',
  },
];

export const semiconductorEducationKo = [
  {
    period: '2026.09–현재',
    title: 'AI 반도체 공정·장비 제어 소프트웨어',
    provider: 'SeSAC 성동',
    detail: '공정, 장비 제어, 데이터 분석, 제조 소프트웨어 집중 과정.',
  },
  {
    period: '2026.07–2026.08',
    title: '데이터 기반 반도체 수율 관리 및 최적화',
    provider: '코멘토',
    detail: '수율, 테스트, Recipe 조정, FEM, Split/Cliff 평가, 상관분석과 회귀분석.',
  },
  {
    period: '2026.08',
    title: '머신러닝을 활용한 반도체 공정 개선',
    provider: 'Semicon Bootcamp',
    detail: 'Spatial ALD, Silicon LPCVD, DOE, SHAP, 제약 최적화와 AI Agent 실험 권고.',
  },
];

export const awardsKo = [
  { title: '최우등 졸업', issuer: '동국대학교' },
  { title: '학부생·주니어 논문경진대회 3위', issuer: 'KCC' },
  { title: '장려상', issuer: 'ICT 멘토링 공모전' },
  { title: '3위', issuer: 'Farm 경진대회' },
  { title: '2위', issuer: '창의 아이디어 경진대회' },
];

export const certificationsKo = [
  { title: 'AICE Associate', issuer: 'KT / 한국경제신문' },
  { title: 'ADsP', issuer: '한국데이터산업진흥원' },
  { title: 'OPIc IH', issuer: 'ACTFL' },
  { title: 'Six Sigma White Belt', issuer: 'CSSC' },
  { title: 'Kaggle Intro to SQL', issuer: 'Kaggle' },
  { title: 'IPAT 5급', issuer: '한국발명진흥회' },
];

export const skillGroupsKo = [
  {
    title: 'AI / ML',
    items: [
      { name: 'PyTorch', evidence: 'MICCAI · 두피 분석 · 군중 계수' },
      { name: 'Scikit-learn', evidence: 'DBSCAN · KNN · 반도체 ML' },
      { name: 'TensorFlow / Keras', evidence: '비전 분류 프로젝트' },
    ],
  },
  {
    title: '컴퓨터 비전',
    items: [
      { name: '3D / 의료영상', evidence: 'VoxelMorph · 표면 복원 · MRI' },
      { name: '검출 / 분할', evidence: 'SAM · YOLOR · EfficientNet · ResNet' },
      { name: '포인트 클라우드', evidence: 'LiDAR · DBSCAN · SECOND · 메쉬' },
    ],
  },
  {
    title: '데이터 / 통계',
    items: [
      { name: 'Python', evidence: 'NumPy · Pandas · SciPy · statsmodels' },
      { name: '통계 분석', evidence: 'MANCOVA · ANCOVA · 다중비교' },
      { name: '공정 분석', evidence: 'DOE · SHAP · 회귀 · 수율' },
    ],
  },
  {
    title: '엔지니어링',
    items: [
      { name: '로보틱스', evidence: 'ROS1 · ROS2 · LiDAR · Unity C#' },
      { name: '개발', evidence: 'C/C++ · C# · Java · Linux · Git' },
      { name: '현장 적용', evidence: 'PyQt5 · 리팩토링 · 시스템 통합' },
    ],
  },
];
