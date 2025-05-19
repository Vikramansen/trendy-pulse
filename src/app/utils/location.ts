export interface LocationData {
  latitude: number;
  longitude: number;
  country: string | null;
  city: string | null;
  error?: string;
}

/**
 * Gets the user's current location using browser geolocation API
 */
export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};

/**
 * Get location data including country and city using a free geolocation API
 */
export const getLocationData = async (): Promise<LocationData> => {
  try {
    // First try to get user's precise location if they allow it
    try {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      
      // Use free IP geolocation API to get city and country
      const response = await fetch(`https://ipapi.co/json/`);
      const data = await response.json();
      
      return {
        latitude,
        longitude,
        country: data.country_name,
        city: data.city
      };
    } catch (geoError) {
      // Fallback to IP-based location if user denies geolocation permission
      const response = await fetch(`https://ipapi.co/json/`);
      const data = await response.json();
      
      return {
        latitude: data.latitude,
        longitude: data.longitude,
        country: data.country_name,
        city: data.city
      };
    }
  } catch (error) {
    console.error('Error getting location data:', error);
    return {
      latitude: 0,
      longitude: 0,
      country: null,
      city: null,
      error: 'Unable to determine location'
    };
  }
}; 