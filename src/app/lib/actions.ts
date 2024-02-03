"use server";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  console.log("TODO: implement authenticate");
}

export type State = {
  errors?: {
    rideName?: string[];
    destinationLocation?: string[];
    startLocation?: string[];
    startDate?: string[];
    tripDuration?: string[];
  };
  message?: string | null;
};

export async function createRide(prevState: State, formData: FormData) {
  console.log("formData keys:", formData.keys());
  for (const key of formData.entries()) {
    console.log(key);
  }
  return {};
}