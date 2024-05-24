import { CV } from '@/features/cv/cv';
import { Skills } from '@/features/skills/skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 p-8 2xl:p-20">
      <Skills />
      <CV />
    </main>
  );
}
