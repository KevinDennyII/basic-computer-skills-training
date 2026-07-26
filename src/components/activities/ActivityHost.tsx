import type { Activity } from '../../content/types';
import HardwareExplorer from './HardwareExplorer';
import DesktopSandbox from './DesktopSandbox';
import MouseTrainer from './MouseTrainer';
import ShortcutTrainer from './ShortcutTrainer';
import MatchGame from './MatchGame';
import Quiz from './Quiz';
import AppPicker from './AppPicker';

interface ActivityHostProps {
  activity: Activity;
  activityId: string;
}

export default function ActivityHost({ activity, activityId }: ActivityHostProps) {
  switch (activity.kind) {
    case 'hardware-explorer':
      return <HardwareExplorer activity={activity} />;
    case 'desktop-sandbox':
      return <DesktopSandbox activity={activity} />;
    case 'mouse-trainer':
      return <MouseTrainer activity={activity} />;
    case 'shortcut-trainer':
      return <ShortcutTrainer activity={activity} />;
    case 'match-game':
      return <MatchGame activity={activity} />;
    case 'quiz':
      return <Quiz activity={activity} activityId={activityId} />;
    case 'app-picker':
      return <AppPicker activity={activity} activityId={activityId} />;
    default:
      return null;
  }
}
