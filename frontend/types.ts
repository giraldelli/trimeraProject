
export type Page = 'home' | 'civilizacao' | 'deuses' | 'energias' | 'entidades' | 'personagens' | 'reinos' | 'regioes' | 'racas' | 'reinos-e-regioes' | 'lendarios' | 'poderes' | 'tatuagens' | 'especializacoes';

export interface NavItem {
  id: Page;
  label: string;
}

export interface LoreEntry {
  title: string;
  description: string;
  effects?: string[]; // Lista de efeitos/características (ex: Energias)
  image?: string;
  stats?: Record<string, string>;
}

export interface CharacterAttributes {
  sabedoria: number;
  forcaFisica: number;
  forcaMagica: number;
  defesa: number;
  tecnica: number;
}

export interface CharacterEntry {
  id: string;
  name: string;
  description: string; // Descrição curta para o card
  fullStory: string;   // História completa para o modal
  role: string;
  image?: string;
  attributes: CharacterAttributes;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
