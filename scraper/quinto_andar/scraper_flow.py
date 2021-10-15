import time

from selenium.common.exceptions import (
    ElementNotInteractableException,
    WebDriverException,
)

from constants.scraper_constants_quinto_andar import quinto_andar
from helpers.error_handler.main import error_handler
from scraper.quinto_andar.recursive_scraper_logic import (
    recursive_scraper_logic,
)
from utils.sleep import sleep
from helpers.logger.console_logger import log


def scraper_flow(x_request_id: str, driver: any):
    """
        Function responsible for deal with flow logic of QuintoAndar scraper.

    Parameters:
        x_request_id: Unique id.
        driver: Google Chrome instance

    Returns:
        void
    """
    try:
        timeout_start = time.time()
        log(
            x_request_id=x_request_id,
            message=f"Initiating the flow of scraper. Time: {timeout_start}",
        )
        recursive_scraper_logic(
            x_request_id=x_request_id,
            div_number_row=quinto_andar["div_number_row_initiator"],
            div_number_column=quinto_andar["div_number_column_initiator"],
            limit_scraper=quinto_andar["limit_scraper"],
            timeout_start=timeout_start,
            driver=driver,
        )
        sleep(10)
        log(x_request_id=x_request_id, message="Finished the flow of scraper.")
    except (WebDriverException, ElementNotInteractableException) as exception:
        error_handler(
            x_request_id=x_request_id,
            _msg="Exception occurred on scraper_flow",
            exception=exception,
        )
