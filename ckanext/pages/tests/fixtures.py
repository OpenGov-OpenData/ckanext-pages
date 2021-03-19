import pytest

import ckan.model as model

from ckanext.pages import db


@pytest.fixture
def pages_setup():
    db.setup()


@pytest.fixture
def clean_pages():
    if db.pages_table is not None and db.pages_table.exists():
        model.Session.query(db.Page).delete()
        model.Session.commit()
