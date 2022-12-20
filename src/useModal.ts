import { ref } from "vue";

export function useModal() {
  const modalIsOpen = ref(false);

  const openModal = () => {
    modalIsOpen.value = true;
  };

  const closeModal = () => {
    modalIsOpen.value = false;
  };

  return {
    modalIsOpen,
    openModal,
    closeModal,
  };
}
