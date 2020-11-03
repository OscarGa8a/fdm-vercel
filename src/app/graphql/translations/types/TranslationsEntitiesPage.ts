import { ConfirmButtonTransitionState } from "../../profile/ConfirmButton";
import { ShopInfo_shop_languages } from "../../profile/Shop/types/ShopInfo";

export interface TranslationsEntitiesPageProps {
  activeField: string;
  disabled: boolean;
  languageCode: string;
  languages: ShopInfo_shop_languages[];
  saveButtonState: ConfirmButtonTransitionState;
  onBack: () => void;
  onEdit: (field: string) => void;
  onDiscard: () => void;
  onLanguageChange: (lang: string) => void;
  onSubmit: (field: string, data: string) => void;
}
