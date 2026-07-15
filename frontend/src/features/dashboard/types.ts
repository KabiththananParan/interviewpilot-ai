export interface StatisticItem {
  label: string;
  value: string;
  badgeText: string;
  type: 'blue' | 'green' | 'purple' | 'orange';
}

export interface ActivityItem {
  id: string;
  title: string;
  meta: string;
  timeAgo: string;
  type: 'upload' | 'search' | 'mic';
}

export interface RoadmapWeek {
  weekNumber: number;
  title: string;
  subtitle: string;
  status: 'completed' | 'current';
  progress?: number;
}