import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@mui/material";
import { useNews } from '../hooks/useNews'

const CATEGORIAS = [
  { value: "general", label: "General" },
  { value: "business", label: "Negocios" },
  { value: "entertainment", label: "Entretenimiento" },
  { value: "health", label: "Salud" },
  { value: "science", label: "Ciencia" },
  { value: "sports", label: "Deportes" },
  { value: "technology", label: "Tecnología" },
];

export const Form = () => {

  const { categories, handleChangeCategories} = useNews();

  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Categoría</InputLabel>
        <Select 
          label="Categoría"
          onChange={handleChangeCategories}
          value={categories}
        >
          {CATEGORIAS.map((category) => (
            <MenuItem 
              key={category.value} 
              value={category.value}
            >
              {category.label}
            </MenuItem>
          ))}

        </Select>
          <Button 
            variant="contained"
            sx={{marginTop: 2}}
          >
            Buscar Noticias
          </Button>
      </FormControl>
    </form>
  );
};
